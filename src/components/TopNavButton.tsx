import * as React from "react";
import { Dispatch, SetStateAction } from "react";
import Link from "@mui/material/Link";

interface Props {
  name: string;
  drawerContent: JSX.Element;
  setDrawerContent: Dispatch<SetStateAction<JSX.Element>>;
}

export function TopNavButton({ name, drawerContent, setDrawerContent }: Props) {
  return (
    <span>
      <Link
        variant="button"
        color="text.primary"
        href="#"
        onClick={() => setDrawerContent(drawerContent)}
        sx={{ my: 1, mx: 1.5 }}
      >
        {name}
      </Link>
    </span>
  );
}
