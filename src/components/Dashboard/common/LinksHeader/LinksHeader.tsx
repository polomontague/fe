import { HeaderContainer, HeaderTitleRow, HyphenatedHeading2, TabsSectionContainer, Tabs, TabHeading } from "./styles";
import { usePathname } from "next/navigation";

type LinksHeaderProps = {
  header: string;
  links: Link[];
};

type Link = {
  href: string;
  label: string;
};

export const LinksHeader = ({ header, links }: LinksHeaderProps) => {
  const pathname = usePathname();
  const pathWithoutLang = pathname.slice(3, pathname.length);

  return (
    <HeaderContainer>
      <HeaderTitleRow>
        <HyphenatedHeading2>{header}</HyphenatedHeading2>
      </HeaderTitleRow>
      <TabsSectionContainer>
        <Tabs>
          {links.map((link) => (
            <TabHeading key={link.href} href={link.href} $isSelected={pathWithoutLang === link.href}>
              {link.label}
            </TabHeading>
          ))}
        </Tabs>
      </TabsSectionContainer>
    </HeaderContainer>
  );
};
