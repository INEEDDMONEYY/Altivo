import { useAuthStore } from "../store/authStore";
import Button from "../shared/ui/Button";

export default function DashboardPage() {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-4 p-8">
      <h1 className="text-2xl font-semibold text-slate-900">Dashboard</h1>
      <p className="text-slate-600">
        Signed in as <span className="font-medium">{user?.email}</span> ({user?.role})
      </p>
      <Button variant="secondary" className="w-fit" onClick={() => logout()}>
        Log out
      </Button>
    </div>
  );
}
