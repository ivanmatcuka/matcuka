import { json } from '@sveltejs/kit';
import { linkedinService } from '../../services/linkedin';

export async function GET() {
	const auth = linkedinService.auth();

	return json(auth);
}
