import { Button } from '@mui/material';

interface CoursesButtonProps extends ButtonProps {
  text: string;
  color?: string;
  backgroundColor?: string;
  hoverBackgroundColor?: string;
  active?: boolean;
  handleClick?: (text: string) => void;
}

const CoursesButton: React.FC<CoursesButtonProps> = ({
  text,
  color = '#0A033C',
  backgroundColor = '#fff',
  hoverBackgroundColor = '#FF6652',
  active = false,
  handleClick,
}) => {
  return (
    <div>
      <Button
        onClick={() => handleClick && handleClick(text)}
        sx={{
          borderRadius: '10px',
          backgroundColor: active ? hoverBackgroundColor : backgroundColor,
          color: active ? '#fff' : color,
          '&:hover': {
            backgroundColor: hoverBackgroundColor,
            color: '#fff',
          },
          boxShadow:
            '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          paddingLeft: 2,
          paddingRight: 2,
          paddingTop: 2,
          paddingBottom: 2,
          fontFamily: 'Inter, sans-serif',
          fontSize: 16,
          fontWeight: 500,
          lineHeight: '20px',
          letterSpacing: '0em',
          textAlign: 'center',
          width: 140,
          height: 60,
          textTransform: 'none',
        }}
      >
        {text}
      </Button>
    </div>
  );
};

export default CoursesButton;
