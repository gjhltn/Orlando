const data = {
	nodeTypes: [NODE.YEAR],
	value: YEAR._1616,
	children: [
		{
			nodeTypes: [NODE.MONTH],
			value: MONTH.JULY,
			children: [
				{
					nodeTypes: [NODE.DATE],
					value: 25,
					children: [
						{
							nodeTypes: [NODE.DAY_LABEL],
							value: DAY.FRIDAY
						},
						{
							nodeTypes: [
								NODE.LINE_ITEM.FINANCIAL.COST
							],
							entities: [
								ENTITY.PLACE.CITY.LONDON,
								ENTITY.TRAVEL.WATER
							],
							value: "I went to London water",
							children: [
								{
										nodeTypes: [NODE.MONEY],
										value: {
											L:0,
											S:2,
											D:2
										}
									}
								]
					}
				]
			}
		]
	}
]
}

const YEAR = {
	_1616: "1616"
}

const MONTH = {
	JULY: "July"
}

const DAY = {
	SUNDAY: "s",
	MONDAY: "m",
	TUESDAY: "t",
	WEDNESDAY: "w",
	THURSDAY: "th",
	FRIDAY: "f",
	SATURDAY: "sa"
}

const NODE = {
	YEAR: "year",
	MONTH: "month",
	DATE: "date",
	DAY_LABEL: "day",
	LINE_ITEM: "item"
}

const ENTITY = {
	PLACE: {
		CITY: {
			LONDON: "London"
		}
	},
	EXPENSE: {
		TRAVEL:{
			WATER: "water"
		}
	}
}
