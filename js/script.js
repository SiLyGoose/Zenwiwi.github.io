var el = jQuery_3_4_1("svg path.el"),
	index = 0;
el.each(function () {
	jQuery_3_4_1(el[index]).attr("stroke-dasharray", el[index++].getTotalLength());
});

// jQuery_3_4_1(document).ready(function () {
// 	jQuery_3_4_1(".particles-js-canvas-el")
// 		.particles()
// 		.init(
// 			{
// 				autoPlay: !0,
// 				background: {
// 					// image: "url(assets/img/noise.png), linear-gradient(152deg, rgb(25,27,50) 0%, rgb(23,19,44) 99%)",
// 					position: "",
// 					repeat: "",
// 					size: "",
// 					opacity: 1,
// 				},
// 				backgroundMode: { enable: !1, zIndex: -1 },
// 				detectRetina: !0,
// 				fpsLimit: 60,
// 				infection: { cure: !1, delay: 0, enable: !1, infections: 0, stages: [] },
// 				interactivity: {
// 					detectsOn: "window",
// 					events: {
// 						onHover: {
// 							enable: !0,
// 							mode: ["grab", "attract"],
// 							parallax: { enable: !0, force: 70, smooth: 10 },
// 						},
// 						resize: !0,
// 					},
// 					modes: {
// 						attract: { distance: 200, duration: 0.4, speed: 1 },
// 						bounce: { distance: 200 },
// 						bubble: { distance: 200, duration: 0.4 },
// 						connect: { distance: 80, links: { opacity: 0.5 }, radius: 60 },
// 						grab: { distance: 100, links: { blink: !1, consent: !1, opacity: 1 } },
// 						light: {
// 							area: {
// 								gradient: { start: { value: "#ffffff" }, stop: { value: "#000000" } },
// 								radius: 1e3,
// 							},
// 							shadow: { color: { value: "#000000" }, length: 2e3 },
// 						},
// 						push: { quantity: 4 },
// 						remove: { quantity: 2 },
// 						repulse: { distance: 200, duration: 0.4, speed: 1 },
// 						slow: { factor: 3, radius: 200 },
// 					},
// 				},
// 				manualParticles: [],
// 				motion: { disable: !1, reduce: { factor: 4, value: !0 } },
// 				particles: {
// 					bounce: {
// 						horizontal: { random: { enable: !1, minimumValue: 0.1 }, value: 1 },
// 						vertical: { random: { enable: !1, minimumValue: 0.1 }, value: 1 },
// 					},
// 					collisions: {
// 						bounce: {
// 							horizontal: { random: { enable: !1, minimumValue: 0.1 }, value: 1 },
// 							vertical: { random: { enable: !1, minimumValue: 0.1 }, value: 1 },
// 						},
// 						enable: !0,
// 						mode: "bounce",
// 					},
// 					color: { value: "#fff", animation: { enable: !1, speed: 50, sync: !1 } },
// 					life: {
// 						count: 0,
// 						delay: { random: { enable: !1, minimumValue: 0 }, value: 0, sync: !1 },
// 						duration: { random: { enable: !1, minimumValue: 1e-4 }, value: 0, sync: !1 },
// 					},
// 					links: {
// 						blink: !1,
// 						color: { value: "#c2c2c2" },
// 						consent: !1,
// 						distance: 100,
// 						enable: !0,
// 						frequency: 1,
// 						opacity: 1,
// 						shadow: { blur: 5, color: { value: "#00ff00" }, enable: !1 },
// 						triangles: { enable: !1, frequency: 1 },
// 						width: 1,
// 						warp: !1,
// 					},
// 					move: {
// 						angle: { offset: 45, value: 90 },
// 						attract: { enable: !1, rotate: { x: 3e3, y: 3e3 } },
// 						direction: "none",
// 						distance: 0,
// 						enable: !0,
// 						gravity: { acceleration: 9.81, enable: !1, maxSpeed: 50 },
// 						noise: { delay: { random: { enable: !1, minimumValue: 0 }, value: 0 }, enable: !1 },
// 						outModes: { default: "bounce" },
// 						random: !1,
// 						size: !1,
// 						speed: 2,
// 						straight: !1,
// 						trail: { enable: !1, length: 10, fillColor: { value: "#000000" } },
// 						vibrate: !1,
// 						warp: !1,
// 					},
// 					number: { density: { enable: !0, area: 800, factor: 1e3 }, limit: 50, value: 100 },
// 					opacity: {
// 						random: { enable: !0, minimumValue: 0.3 },
// 						value: 0.8,
// 						animation: { enable: !0, minimumValue: 0.3, speed: 0.5, sync: !1 },
// 					},
// 					reduceDuplicates: !1,
// 					rotate: {
// 						random: { enable: !1, minimumValue: 0 },
// 						value: 0,
// 						animation: { enable: !1, speed: 0, sync: !1 },
// 						direction: "clockwise",
// 						path: !1,
// 					},
// 					shadow: { blur: 0, color: { value: "#000000" }, enable: !1, offset: { x: 0, y: 0 } },
// 					shape: { options: {}, type: "circle" },
// 					size: {
// 						random: { enable: !0, minimumValue: 1 },
// 						value: 3,
// 						animation: {
// 							destroy: "none",
// 							enable: !0,
// 							minimumValue: 1,
// 							speed: 3,
// 							startValue: "max",
// 							sync: !1,
// 						},
// 					},
// 					stroke: {
// 						width: 0,
// 						color: { value: "#ffffff", animation: { enable: !1, speed: 0, sync: !1 } },
// 						opacity: 1,
// 					},
// 					twinkle: {
// 						lines: { enable: !1, frequency: 0.05, opacity: 1 },
// 						particles: { enable: !1, frequency: 0.05, opacity: 1 },
// 					},
// 				},
// 				pauseOnBlur: !0,
// 				pauseOnOutsideViewport: !0,
// 				themes: [],
// 			},
// 			function (i) {}
// 		),
// 		jQuery_3_4_1(".particles-js-canvas-el")
// 			.particles()
// 			.ajax("particles.json", function (i) {});
// });
