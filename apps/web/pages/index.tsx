import {
  Anchor,
  Button,
  H1,
  Paragraph,
  Separator,
  XStack,
  YStack,
  MyComponent,
} from '@nx-tamagui-example/ui';

export const Index = () => {
  return (
    <YStack f={1} jc="center" ai="center" p="$4" space>
      <YStack space="$4" maw={600}>
        <H1 ta="center">Welcome to Tamagui.</H1>
        <Paragraph ta="center">
          Here is a basic starter to show navigating from one screen to another.
          This screen uses the same code on Next.js and React Native.
        </Paragraph>
        <MyComponent />
        <Separator />
        <Paragraph ta="center">
          Tamagui is made by{' '}
          <Anchor href="https://twitter.com/natebirdman" target="_blank">
            Nate Wienert
          </Anchor>
          , give it a star{' '}
          <Anchor
            href="https://github.com/tamagui/tamagui"
            target="_blank"
            rel="noreferrer"
          >
            on Github
          </Anchor>
          .
        </Paragraph>
      </YStack>

      <XStack>
        <Button href="/user/nate">Link to user</Button>
      </XStack>
    </YStack>
  );
};

export default Index;
