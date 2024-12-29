import { BookOpenText } from "lucide-react";

export function AuthHeader() {
  return (
    <div className="flex flex-col items-center space-y-6 mb-8">
      <div className="bg-primary/10 rounded-2xl p-4">
        <BookOpenText className="h-12 w-12 text-primary" />
      </div>
    </div>
  );
}