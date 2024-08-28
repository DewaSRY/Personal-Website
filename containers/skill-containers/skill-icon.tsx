import { cn } from "@/lib/utils";

export default function SkillIcon({ text }: { text: string }) {
  return (
    <div
      className={cn(
        "transition-colors duration-300 ",
        "rounded py-2 px-4 text-sm  bg-muted text-white-one hover:bg-white hover:text-black"
      )}
    >
      <span className="mr-2">#</span>
      {text}
    </div>
  );
}
