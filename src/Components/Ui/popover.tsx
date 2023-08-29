import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from "./link"
import  Avatar  from "./avater";
import MenuIcon from '@mui/icons-material/Menu';
import Selecter from "./selecte"




export default function BasicPopover() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <Button aria-describedby={id} variant="text" onClick={handleClick}>
        <MenuIcon fontSize='large' />
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal:'left',
        }}
      >
        <Typography sx={{ p: 2 }}><Link text="Home"  url="/"/></Typography>
        <Typography sx={{ p: 2 }}><Link text="Courses" url="/Courses" /></Typography>
        <Typography sx={{ p: 2 }}><Selecter /></Typography>
        <Typography sx={{ p: 2 }}><Link text="About us" url="/Aboutus" /></Typography>
        <Typography sx={{ p: 2 }}><Link text="About us" url="/Aboutus" /></Typography>
        <Typography sx={{ p: 2 }}><Link text="Contact" url="./Contact" /></Typography>
        <Typography sx={{ p: 2 }}> <Avatar /></Typography>
      </Popover>
    </div>
  );
}