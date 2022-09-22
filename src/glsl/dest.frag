uniform sampler2D tDiffuse;
uniform float bright;
uniform float alpha;
uniform float contrast;

varying vec2 vUv;


void main(void) {

  vec4 dest = texture2D(tDiffuse, vUv);
  dest.rgb = (dest.rgb - 0.5) / (1.0 - contrast) + 0.5;
  dest.rgb += bright;
  dest.rgb = min(vec3(1.0), dest.rgb);
  dest.a *= alpha;

  dest.rgb *= vec3(1.0, 0.5, vUv.y * 0.5);

  float kake = 1500.0;
  dest.rgb += sin(vUv.x * kake) * sin(vUv.y * kake) * 0.1;

  dest.rgb = 1.0 - dest.rgb;

  // dest.rgb = mix(vec3(1.0, 0.0, 0.0), dest.rgb, dest.r);

  gl_FragColor = dest;

}
