export type AwardItem = {
	title: string;
	winner: string;
};

export type AgendaItem = {
	planTime?: string;
	planDuration?: string;
	actualTime: string;
	duration?: string;
	title: string;
	speaker: string;
};

export type MeetingItem = {
	id: string;
	type: string;
	title: string;
	wordOfToday?: string;
	manager: string;
	date: string;
	time: string;
	location: string;
	description: string;
	image: string;
	agendaStartTime?: string;
	awards: AwardItem[];
	agenda: AgendaItem[];
};

export const defaultMeetings: MeetingItem[] = [
	{
		id: '#442',
		type: 'Regular',
		title: 'Traveling',
		manager: 'Leta Li',
		date: '2026-02-04',
		time: '19:15:00 - 21:30:00',
		location: 'Huameiju Home Mall, Block B809 (BaoTi Station, Line 1)',
		description:
			'Are you a traveling lover? Did you meet someone special during your trip? Join us and share your story with SHIP members in this bilingual themed meeting.',
		image: '',
		agendaStartTime: '19:15',
		awards: [
			{ title: 'Best Prepared Speaker', winner: 'Alice Song' },
			{ title: 'Best Table Topic Speaker', winner: 'Rowland' },
			{ title: 'Best Facilitator', winner: 'Rui Zheng' },
			{ title: 'Best Evaluator', winner: 'Will' },
			{ title: 'Best Supporter', winner: 'Vicky' },
			{ title: 'Best Meeting Manager', winner: 'Leta Li' },
		],
		agenda: [
			{
				duration: '15',
				actualTime: '19:17 - 19:31',
				title: 'Members and Guests Registration, Warm up',
				speaker: 'All',
			},
			{
				duration: '2',
				actualTime: '19:35 - 19:37',
				title: 'TOM (Toastmaster of Meeting) Introduction',
				speaker: 'Shelly Qu',
			},
			{
				duration: '8',
				actualTime: '20:12 - 20:20',
				title: 'Prepared Speech',
				speaker: 'John Lin - Ice Breaker',
			},
		],
	},
	{
		id: '#441',
		type: 'Regular',
		title: 'Sharing Your Life Stories',
		manager: 'Frank Zeng',
		date: '2026-01-28',
		time: '19:15:00 - 21:30:00',
		location: 'Huameiju Home Mall, Block B809 (BaoTi Station, Line 1)',
		description:
			'Members shared personal life stories in English and Chinese. The audience reflected together and offered feedback in a warm and professional atmosphere.',
		image: '',
		agendaStartTime: '19:15',
		awards: [
			{ title: 'Best Prepared Speaker', winner: 'Alice Song' },
			{ title: 'Best Host', winner: 'Frank Zeng' },
			{ title: 'Best Table Topic Speaker', winner: 'Jessica Peng' },
			{ title: 'Best Evaluator', winner: 'Karmen' },
		],
		agenda: [
			{
				duration: '2',
				actualTime: '19:31 - 19:33',
				title: 'Meeting Rules Introduction (SAA)',
				speaker: 'Andy Zou',
			},
			{
				duration: '35',
				actualTime: '19:47 - 20:23',
				title: 'Prepared Speeches Session',
				speaker: 'Multiple Speakers',
			},
			{
				duration: '15',
				actualTime: '20:57 - 21:11',
				title: 'General Evaluation',
				speaker: 'Karmen',
			},
		],
	},
];
