import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <header className="min-w-[60%] relative flex items-center border rounded-full bg-primary-90 overflow-hidden">
      <Button type="submit" size="sm" variant="ghost">
        <Search className="h-4 w-4 bg-primary-90" />
        <span className="sr-only">Search</span>
      </Button>

      <Input
        type="text"
        placeholder="Search by title"
        className="flex-grow border-none focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent placeholder:text-muted-foreground text-muted-foreground"
      />
    </header>
  );
};

export default SearchBar;
