import React, { useEffect, useRef } from 'react';

const FluidSimulation = () => {
  const canvasRef = useRef(null);
  const timeRef = useRef(0);
  const frameRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const gl = canvas.getContext('webgl');

    if (!gl) {
      console.error('WebGL not supported');
      return;
    }

    // Simple vertex shader
    const vertexShaderSource = `
      attribute vec4 a_position;
      void main() {
        gl_Position = a_position;
      }
    `;

    // Fragment shader with fluid-like effect
    const fragmentShaderSource = `
      precision mediump float;
      uniform vec2 u_resolution;
      uniform float u_time;
      uniform vec2 u_mouse;

      vec3 colorA = vec3(0.5, 0.0, 1.0);  // Purple
      vec3 colorB = vec3(0.0, 0.8, 0.8);  // Teal

      void main() {
        vec2 uv = gl_FragCoord.xy / u_resolution;
        vec2 mouse = u_mouse / u_resolution;
        
        // Create dynamic waves
        float wave1 = sin(uv.x * 10.0 + u_time) * 0.5 + 0.5;
        float wave2 = cos(uv.y * 8.0 - u_time * 0.8) * 0.5 + 0.5;
        
        // Mouse interaction
        float mouseDist = length(uv - mouse);
        float mouseInfluence = smoothstep(0.5, 0.0, mouseDist);
        
        // Combine waves with mouse influence
        float mix_value = (wave1 + wave2) * 0.5 + mouseInfluence;
        
        // Mix colors
        vec3 color = mix(colorA, colorB, mix_value);
        
        // Add some transparency
        float alpha = 0.7;
        
        gl_FragColor = vec4(color, alpha);
      }
    `;

    // Create and compile shaders
    const vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderSource);
    gl.compileShader(vertexShader);

    const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderSource);
    gl.compileShader(fragmentShader);

    // Create program
    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    // Set up rectangle
    const positions = new Float32Array([
      -1, -1,
      1, -1,
      -1, 1,
      -1, 1,
      1, -1,
      1, 1,
    ]);

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

    // Get attribute and uniform locations
    const positionLocation = gl.getAttribLocation(program, 'a_position');
    const resolutionLocation = gl.getUniformLocation(program, 'u_resolution');
    const timeLocation = gl.getUniformLocation(program, 'u_time');
    const mouseLocation = gl.getUniformLocation(program, 'u_mouse');

    // Mouse tracking
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = rect.height - (e.clientY - rect.top);
    };

    // Resize handling
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    // Animation loop
    const render = () => {
      timeRef.current += 0.01;

      gl.useProgram(program);
      gl.enableVertexAttribArray(positionLocation);
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
      gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

      gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
      gl.uniform1f(timeLocation, timeRef.current);
      gl.uniform2f(mouseLocation, mouseX, mouseY);

      gl.drawArrays(gl.TRIANGLES, 0, 6);

      frameRef.current = requestAnimationFrame(render);
    };

    // Initial setup
    resize();
    window.addEventListener('resize', resize);
    render();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(frameRef.current);
      gl.deleteProgram(program);
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);
      gl.deleteBuffer(positionBuffer);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 opacity-80"
      style={{ background: 'transparent' }}
    />
  );
};

export default FluidSimulation;