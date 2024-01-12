import { DashboardHeader } from '~/components/DashboardHeader';
import { DashboardShell } from '~/components/DashboardShell';
import { Icons } from '~/components/Icons';
import { Button } from '~/components/ui/button';

export const metadata = {
	title: 'Dashboard - Uploads'
};

export default async function DashboardPage() {
	return (
		<DashboardShell>
			<DashboardHeader title="Uploads" subtitle="Manage your uploads">
				<Button>
					<Icons.add className="mr-2 h-4 w-4" />
					Upload file
				</Button>
			</DashboardHeader>
		</DashboardShell>
	);
}
