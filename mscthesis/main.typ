#import "@preview/polylux:0.4.0": *

#set page(
	paper: "presentation-16-9",
	fill: rgb("#191919"),
)
#set text(
	size: 25pt,
	font: "Hanken Grotesk",
	fill: white 
)

#slide[
  #set align(horizon)
	#text(fill: gray, weight: 700)[Master's Degree Thesis]

	#text(weight: 700, size: 28pt)[Solving the Train Timetabling Problem using Multi-Agent Reinforcement Learning: an Infrastructure-Centric Approach]
	#pad(
		top: 0pt,
		bottom: 16pt
	)[
		#text(size: 18pt)[
			Scientific and Data-Intensive Computing 2024/2025
		]
	]
	#columns(2)[
		#align(left)[
			#text(size: 18pt, fill: gray)[
				Andrea Esposito \
				[SM3600005]
			]
		]
		#colbreak()
		#align(right)[
			#text(size: 18pt, fill: gray)[
				Lorenzo Castelli \
				Federico Julian Camerota Verdù \
				Nicola Coviello
			]
		]
	]
]

#slide[
	#set align(horizon)
	#list(
		[
			Railway is a private-driven competitive sector \
			#text(size: 14pt, fill: gray, weight: 900)[STRONG ECONOMIC INTEREST]
		],
		[
			Demand is rising \
			#text(size: 18pt, fill: gray)[fostered by sustainability and multimodality]
		],
		[
			Intrinsic duality: shared infrastructure \
			#text(size: 18pt, fill: gray)[TOCs subjected to physical and logistical constraints by IM]
		],
		[
			Effective planning is key \
			#text(size: 18pt, fill: gray)[to maximise presence and profit and coordinate competitors]
		]
	)
]

#slide[
	#set align(horizon)

]