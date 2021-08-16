import { projectsData } from '../../../projectsData.js';

export default async (req, res) => {
	res.status(200).json(projectsData);
};
