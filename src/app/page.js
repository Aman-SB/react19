import ActionForm from "@/useActionState/form";
import Todo from "@/useoptimistic/todo";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-700">
      {/* <ActionForm/> */}
      <Todo/>

    </main>
  );
}
