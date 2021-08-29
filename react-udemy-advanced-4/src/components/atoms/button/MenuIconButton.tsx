import { memo, VFC } from 'react';
import { IconButton } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

type Props = {
  onOpen: () => void;
};

export const MenuIconButton: VFC<Props> = memo((props) => {
  const { onOpen } = props;
  return (
    <IconButton
      icon={<HamburgerIcon />}
      aria-label="menu-button"
      size="sm"
      variant="unstyled"
      display={{ base: 'block', md: 'none' }}
      onClick={onOpen}
    />
  );
});
