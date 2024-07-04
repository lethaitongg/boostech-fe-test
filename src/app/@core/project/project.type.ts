import { UUID } from "crypto";

export interface Project {
	id: UUID;
	name: string;
	clientId: UUID;
	clientAvatar: string;
	clientName: string;
	managerId: UUID;
	managerName: string;
	managerAvatar: string;
	budget: number;
	processStatus: "pending" | "processing" | "done" | "cancel";
	description: string;
	startDate: Date;
	endDate: Date;
}
