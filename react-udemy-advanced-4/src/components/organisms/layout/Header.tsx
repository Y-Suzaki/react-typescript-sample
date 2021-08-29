/* eslint-disable react-hooks/exhaustive-deps */
import { memo, useCallback, VFC } from 'react';
import { useHistory } from 'react-router-dom';
import { Flex, Heading, Link, Box, useDisclosure } from '@chakra-ui/react';
import { MenuIconButton } from '../../atoms/button/MenuIconButton';
import { MenuDrawer } from '../../molecules/MenuDrawer';

export const Header: VFC = memo(() => {
  // カスタムフック的な感じで、chakra UIが便利な関数を用意してくれている。Stateも隠蔽されているので、自分で用意しなくて良い。
  const { isOpen, onOpen, onClose } = useDisclosure();
  const history = useHistory();

  const onClickHome = useCallback(() => history.push('/home'), []);
  const onClickUserManagement = useCallback(() => history.push('/home/user_management'), []);
  const onClickSetting = useCallback(() => history.push('/home/setting'), []);

  return (
    <>
      <Flex as="nav" bg="teal.500" color="gray.50" align="center" justify="space-between" padding={{ base: 3, md: 5 }}>
        <Flex as="a" align="center" mr={8} _hover={{ cursor: 'pointer' }} onClick={onClickHome}>
          {/* デフォルトの文字サイズはmd, 画面サイズがmd以上になると、文字サイズがlgになる。 */}
          <Heading as="h1" fontSize={{ base: 'md', md: 'lg' }}>
            User Management Application
          </Heading>
        </Flex>
        <Flex align="center" fontSize="sm" flexGrow={2} display={{ base: 'none', md: 'flex' }}>
          <Box>
            <Link pr={4} onClick={onClickUserManagement}>
              User List
            </Link>
          </Box>
          <Box>
            <Link onClick={onClickSetting}>Setting</Link>
          </Box>
        </Flex>
        <MenuIconButton onOpen={onOpen} />
      </Flex>
      <MenuDrawer
        isOpen={isOpen}
        onClose={onClose}
        onClickHome={onClickHome}
        onClickUserManagement={onClickUserManagement}
        onClickSetting={onClickSetting}
      />
    </>
  );
});
