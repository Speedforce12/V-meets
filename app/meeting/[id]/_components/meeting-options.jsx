import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LayoutDashboard } from "lucide-react";

const MeetingOptions = ({ setLayout }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <LayoutDashboard />
      </DropdownMenuTrigger>
      <DropdownMenuContent className='dark'>
        {["Grid", "Speaker-Left", "Speaker-Right"].map((item, index) => (
          <DropdownMenuItem
            key={index}
            onClick={() => setLayout(item.toLowerCase())} className="cursor-pointer">
            {item}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MeetingOptions;
