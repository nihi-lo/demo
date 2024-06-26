import { Button, Divider } from "@nextui-org/react";
import { TbArrowRight } from "react-icons/tb";

import { Container, HStack, Section, VStack } from "@portal-core/ui";

import { PlanDropdown } from "@sub-app/gakusim-app/components/model/PlanDropdown";

const TopPage = (): JSX.Element => {
  return (
    <VStack as="main">
      <Container>
        <Section headingAs="h2" title="ユニット編成">
          <VStack align="center" gap="md">
            <HStack gap="md" className="grid w-full grid-cols-1 xl:grid-cols-3">
              {/* ステージ１ */}
              <VStack className="h-max w-full overflow-hidden rounded-medium bg-content1 p-4 shadow-small">
                <HStack align="start" justify="center" gap="md">
                  <HStack align="center" gap="md">
                    {/* ステージ */}
                    <VStack align="end" justify="between" gap="xs" className="h-16">
                      <p className="text-large font-semibold text-content1-foreground">
                        ステージ１
                      </p>
                      <PlanDropdown />
                    </VStack>

                    {/* Pアイテム */}
                    <div className="size-16 flex-none rounded-md border-medium border-divider bg-content2"></div>
                  </HStack>

                  <VStack align="start" justify="between" gap="xs" className="h-16">
                    {/* ターン数 */}
                    <HStack align="center" justify="end" gap="sm">
                      <HStack
                        align="center"
                        justify="center"
                        px="md"
                        className="h-6 rounded-tr-lg bg-primary"
                      >
                        <p className="text-small text-primary-foreground">ターン</p>
                      </HStack>
                      <p className="text-large font-semibold text-content1-foreground">10</p>
                    </HStack>

                    {/* 総合力 */}
                    <HStack align="center" justify="end" gap="sm">
                      <HStack
                        align="center"
                        justify="center"
                        px="md"
                        className="h-6 rounded-tr-lg bg-primary"
                      >
                        <p className="text-small text-primary-foreground">総合力</p>
                      </HStack>
                      <p className="text-large font-semibold text-content1-foreground">28746</p>
                    </HStack>
                  </VStack>
                </HStack>
                <Divider className="my-2" />
              </VStack>

              {/* ステージ２ */}
              <VStack className="h-max w-full overflow-hidden rounded-medium bg-content1 p-4 shadow-small">
                <HStack align="start" justify="center" gap="md">
                  <HStack align="center" gap="md">
                    {/* ステージ */}
                    <VStack align="end" justify="between" gap="xs" className="h-16">
                      <p className="text-large font-semibold text-content1-foreground">
                        ステージ２
                      </p>
                      <PlanDropdown />
                    </VStack>

                    {/* Pアイテム */}
                    <div className="size-16 flex-none rounded-md border-medium border-divider bg-content2"></div>
                  </HStack>

                  <VStack align="start" justify="between" gap="xs" className="h-16">
                    {/* ターン数 */}
                    <HStack align="center" justify="end" gap="sm">
                      <HStack
                        align="center"
                        justify="center"
                        px="md"
                        className="h-6 rounded-tr-lg bg-primary"
                      >
                        <p className="text-small text-primary-foreground">ターン</p>
                      </HStack>
                      <p className="text-large font-semibold text-content1-foreground">8</p>
                    </HStack>

                    {/* 総合力 */}
                    <HStack align="center" justify="end" gap="sm">
                      <HStack
                        align="center"
                        justify="center"
                        px="md"
                        className="h-6 rounded-tr-lg bg-primary"
                      >
                        <p className="text-small text-primary-foreground">総合力</p>
                      </HStack>
                      <p className="text-large font-semibold text-content1-foreground">27906</p>
                    </HStack>
                  </VStack>
                </HStack>
                <Divider className="my-2" />
              </VStack>

              {/* ステージ３ */}
              <VStack className="h-max w-full overflow-hidden rounded-medium bg-content1 p-4 shadow-small">
                <HStack align="start" justify="center" gap="md">
                  <HStack align="center" gap="md">
                    {/* ステージ */}
                    <VStack align="end" justify="between" gap="xs" className="h-16">
                      <p className="text-large font-semibold text-content1-foreground">
                        ステージ３
                      </p>
                      <PlanDropdown />
                    </VStack>

                    {/* Pアイテム */}
                    <div className="size-16 flex-none rounded-md border-medium border-divider bg-content2"></div>
                  </HStack>

                  <VStack align="start" justify="between" gap="xs" className="h-16">
                    {/* ターン数 */}
                    <HStack align="center" justify="end" gap="sm">
                      <HStack
                        align="center"
                        justify="center"
                        px="md"
                        className="h-6 rounded-tr-lg bg-primary"
                      >
                        <p className="text-small text-primary-foreground">ターン</p>
                      </HStack>
                      <p className="text-large font-semibold text-content1-foreground">8</p>
                    </HStack>

                    {/* 総合力 */}
                    <HStack align="center" justify="end" gap="sm">
                      <HStack
                        align="center"
                        justify="center"
                        px="md"
                        className="h-6 rounded-tr-lg bg-primary"
                      >
                        <p className="text-small text-primary-foreground">総合力</p>
                      </HStack>
                      <p className="text-large font-semibold text-content1-foreground">25611</p>
                    </HStack>
                  </VStack>
                </HStack>
                <Divider className="my-2" />
              </VStack>
            </HStack>
            <Button color="primary" size="lg" startContent={<TbArrowRight className="size-8" />}>
              対戦開始
            </Button>
          </VStack>
        </Section>
        <Section headingAs="h2" title="対戦結果">
          <p>まだ対戦していません。</p>
        </Section>
      </Container>
    </VStack>
  );
};

export { TopPage };
