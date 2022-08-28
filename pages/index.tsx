import IndexHero from "../components/layout/hero/IndexHero/IndexHero";
import styled from "styled-components";
import HeroFadeout from "../components/layout/hero/HeroFadeout";
import Feature from "../components/index/Feature";
import PagePadding from "../components/layout/global/PagePadding";
import PreFooterCTA from "../components/layout/hero/IndexHero/PreFooterCTA";

import Servers from "../assets/illustrations/Servers.svg";
import Roles from "../assets/illustrations/Roles.svg";
import Private from "../assets/illustrations/Private.svg";
import Colors from "../assets/illustrations/Colors.svg";
import { GetStaticProps } from "next";

const HeroContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.backgroundLighter};
`;

interface HomeProps {
    fadeoutUrl: string;
}

export default function Home({ fadeoutUrl }: HomeProps) {
    return (
        <>
            <HeroContainer>
                <IndexHero />
                <HeroFadeout staticFadeoutUrl={fadeoutUrl} />
            </HeroContainer>
            <PagePadding>
                <Feature
                    heading="Access to charts at your fingertips."
                    image={Servers.src}
                >
                    Stonk Bot is a lightweight bot that shows you stock, crypto,
                    forex, and short interest at your fingertips. Want to know
                    more about a ticker? It can do that too. Instant access to
                    only the data you want to see.
                </Feature>
                <Feature
                    heading="No more spamming channels."
                    image={Roles.src}
                    reverse
                >
                    You don't like spam in your channels, neither do we. We
                    bring to you a bot that only shows <strong>you</strong>,
                    what you want to see. Whether it be looking up a ticker, or
                    getting short intrest information, only you can see the
                    commands you are running.
                </Feature>
                <Feature
                    heading="Lightweight, Innovative, and Modern technology."
                    image={Private.src}
                >
                    Even though we are a small team of developers, we are
                    constantly making improvements to allow for a smooth user
                    experiance using modern practices and technologies.
                </Feature>
                <Feature
                    heading="Set up in seconds."
                    image={Colors.src}
                    reverse
                >
                    Stonk Bot's simplicity makes it easy for any server owner to
                    get started doing their financial analysis. Just invite the
                    bot to your server and start searching!
                </Feature>
            </PagePadding>
            <PreFooterCTA />
        </>
    );
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
    // See components/layout/hero/HeroFadeout for an explanation of what we're doing here
    const fs = await import("fs/promises");
    const { join } = await import("path");

    const fadeoutPath = join(
        process.cwd(),
        "assets",
        "illustrations",
        "Fadeout.svg"
    );
    const fadeoutContents = await fs.readFile(fadeoutPath);
    const fadeoutUrl = fadeoutContents.toString("base64");

    return {
        props: {
            fadeoutUrl: `data:image/svg+xml;base64,${fadeoutUrl}`,
        },
    };
};
