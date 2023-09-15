import { Flex, Box, Text, Image, Tag } from "@chakra-ui/react";
import ProdutorImage from "../../assets/images/produtor.svg";
import { Button } from "../Button";
import { AdditionalInfo } from "./components/AdditionalInfo";
import CompanyIcon from "../../assets/icons/company.svg";
import AgronomicIcon from "../../assets/icons/agronomic.svg";
import FinancialIcon from "../../assets/icons/financial.svg";
import { CurrentPageEnum } from "../../types";

interface HeaderProps {
  currentPage: CurrentPageEnum;
  handleChangePage(prop: CurrentPageEnum): void;
}

export const Header = ({ handleChangePage, currentPage }: HeaderProps) => {
  return (
    <Flex
      width="calc(100% - 64px)"
      height="183px"
      borderRadius="15px"
      backgroundColor="#1A8C6F"
      mt="28px"
      mx="32px"
      px="26px"
      flexDirection="column"
    >
      <Flex
        flexDirection="column"
        backgroundColor="#fff"
        mt="61px"
        borderRadius="15px"
        py="31px"
        pl="30px"
        boxShadow="0px 1px 2px #00000025"
      >
        <Flex width="100%" alignItems="center">
          <Flex alignItems="center" flex={1}>
            <Box
              h="81px"
              w="81px"
              borderRadius="8px"
              backgroundColor="gray.100"
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexDir="column"
              gap="6.95px"
            >
              <Image src={ProdutorImage} />
              <Text
                fontWeight={700}
                fontSize={".55em"}
                textAlign="center"
                color="gray.600"
                lineHeight="9px"
              >
                PRODUTOR RURAL
              </Text>
            </Box>

            <Box marginLeft="21px">
              <Text fontWeight={700} color="gray.700">
                Produtor João Ferreira
              </Text>
              <Text fontWeight={600} color="gray.400" fontSize="0.85em">
                02.916.265/0001-60
              </Text>
            </Box>
          </Flex>
          <Flex h="81px" alignItems="center" mr="44px" flexDir="column">
            <Text color="gray.400" fontWeight={700} fontSize=".85em">
              REGIONAL
            </Text>
            <Tag
              size="lg"
              w="100%"
              variant="subtle"
              justifyContent="center"
              background="gray.300"
              color="gray.600"
              fontWeight={400}
            >
              Sul
            </Tag>
          </Flex>
        </Flex>
        <Flex mt="5px" alignItems="center">
          <Flex gap="11px" marginLeft="102px" flex={1}>
            <Button isDisabled label="Empresa" icon={CompanyIcon} />
            <Button
              label="Agronômico"
              icon={AgronomicIcon}
              onClick={() => handleChangePage(CurrentPageEnum.agronomic)}
              isActive={currentPage === CurrentPageEnum.agronomic}
            />
            <Button
              label="Financeiro"
              icon={FinancialIcon}
              onClick={() => handleChangePage(CurrentPageEnum.financial)}
              isActive={currentPage === CurrentPageEnum.financial}
            />
          </Flex>

          <Flex mr="44px" gap="20px">
            <AdditionalInfo title="CTC" description={"Jorge M."} />
            <AdditionalInfo title="CRÉDITO" description="Person Name" />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
