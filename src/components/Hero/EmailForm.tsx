import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

interface EmailFormProps {
  onSubmit: (email: string) => void;
}

const EmailForm = ({ onSubmit }: EmailFormProps) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(email);
    setEmail("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative flex items-center h-14 rounded-full border border-input bg-card px-1 max-w-xl mx-auto mb-8"
    >
      <Input
        type="email"
        placeholder="Enter your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 h-full px-5 border-0 bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none text-sm"
        required
      />
      <Button variant="accent" size="lg" type="submit" className="cursor-pointer">
        Book a Demo
      </Button>
    </form>
  );
};

export default EmailForm;
