import React from "react";
import * as HoverCard from "@radix-ui/react-hover-card";
import "./hoverStyles.css";
import SearchBar from "./components/SearchBar";

const HoverCardSearch = () => (
	<HoverCard.Root>
<HoverCard.Trigger asChild>
  <div>
    <SearchBar />
  </div>
</HoverCard.Trigger>

		<HoverCard.Portal>
			<HoverCard.Content className="HoverCardContent" sideOffset={5} style={{background:"#121212", color:"#fff", width:"fit-content", height:"fit-content"}}>
                        Search
				{/* <HoverCard.Arrow className="HoverCardArrow" /> */}
			</HoverCard.Content>
		</HoverCard.Portal>

	</HoverCard.Root>
);

export default HoverCardSearch;
