import { styled, theme } from "../../styles";
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';

const StyledCheckbox = styled(CheckboxPrimitive.Root,{
    cursor: 'pointer',
    width: 22,
    height: 22,
    borderRadius: 9999,
    border: `2px solid ${theme.colors.blue}`,
    background: 'none',
});

const StyledIcon = styled('span',{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    position: 'relative',
    '&::after': {
      content: '""',
      display: 'block',
      width: 10,
      height: 10,
      borderRadius: 9999,
      border: `2px solid ${theme.colors.blue}`,
      backgroundColor: theme.colors.blue,
    },
})

const StyledIndicator = styled(CheckboxPrimitive.Indicator,{
    color: theme.colors.blue
});

export function Checkbox(){
    return(
        <StyledCheckbox>
            <StyledIndicator>
                <StyledIcon />
            </StyledIndicator>
        </StyledCheckbox>
    )
}