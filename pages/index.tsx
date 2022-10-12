import { createStyles, List, Stack, Title, Text, Timeline, Image, Group, BackgroundImage } from '@mantine/core'
import { useI18n } from 'next-localization'


const useStyles = createStyles((theme) => ({
    section: {
        width: '100%',
        maxWidth: 1520,
        padding: theme.spacing.xs,
    },
    hero: {
        position: 'relative',
        minHeight: 'min(800px, 100vh)',
        ['& > div']: {
            position: 'absolute',
            top: 0,
            bottom: 0,
            width: '100%',
        },
    },
}))

const timelineItems = [
    {
        content: (
            <Image
                src='https://wompampsupport.azureedge.net/fetchimage?siteId=7575&v=2&jpgQuality=100&width=700&url=https%3A%2F%2Fi.kym-cdn.com%2Fphotos%2Fimages%2Fnewsfeed%2F001%2F852%2F171%2F895'
                width={200}
                height={200}
            />
        )
    },
    {},
    {},
    {},

]

const ideasItems = [
    {
        title: 'WELCOME ENVIRONMENT',
        text: 'we provide safe and welcome environment for future collaboration of the activist, communities and civil society actors',
    },
    {
        title: 'FOCUSED COLLAB',
        text: 'we support community leaders and provide them assistance with professional tools and knowledge in facilitating online discussions',
    },
    {
        title: 'TRACKABLE PROGRESS',
        text: 'we set our community goals and measure our progress in order to be sure that we create a meaningful process for the community.',
    },
    {
        title: 'TRANSPARENT ACTIVITY',
        text: 'we act public and share our results for free We wish to encourage others to to the same.',
    },
    {
        title: 'ACCESSIBLE KNOWLEDGE',
        text: 'we do efforts to break the language barriers between our members in order to accumulate the collective intelligence of our community.',
    },
]

const limelineIcons = {
    '1': (
        <div>
            1
        </div>
    ),
    '5': (
        <div>
            2
        </div>
    ),
    '9': ( // snowflake icon
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M10 4l2 1l2 -1m-2 -2v6.5l3 1.72" />
            <path d="M10 4l2 1l2 -1m-2 -2v6.5l3 1.72" transform="rotate(60 12 12)" />
            <path d="M10 4l2 1l2 -1m-2 -2v6.5l3 1.72" transform="rotate(120 12 12)" />
            <path d="M10 4l2 1l2 -1m-2 -2v6.5l3 1.72" transform="rotate(180 12 12)" />
            <path d="M10 4l2 1l2 -1m-2 -2v6.5l3 1.72" transform="rotate(240 12 12)" />
            <path d="M10 4l2 1l2 -1m-2 -2v6.5l3 1.72" transform="rotate(300 12 12)" />
        </svg>
    )
}
export default function Home() {
    const metrika = process.env.NEXT_PUBLIC_YANDEX_METRIKA
    const i18n = useI18n()
    const t = i18n.withPlural()
    const { classes: s, cx } = useStyles()
    return (
        <Stack
            spacing={'4rem' as any}
            align='center'
        >
            <BackgroundImage
                className={cx(s.hero)}
                src='/hero.png'
            >
                <Stack
                    justify='center'
                    align='center'
                    px='xs'
                    sx={{
                        textShadow: '0px 4px 4px #FFFFFF',
                    }}
                >
                    <Title
                        sx={{
                            fontSize: 'min(96px, 8vw)',
                            textTransform: 'uppercase',
                        }}
                    >
                        pollinating.space
                    </Title>
                    <Text>
                        {i18n.t('index.hero')}
                    </Text>
                </Stack>
            </BackgroundImage>
            {/* <Stack
                className={s.section}
            >
                <Title order={2}
                    sx={{
                        textTransform: 'uppercase',
                    }}
                >
                    {i18n.t('index.ecosystemList.title')}
                </Title>
                <List
                    icon='·'
                >
                    <List.Item>
                        {i18n.t('index.ecosystemList.0')}
                    </List.Item>
                    <List.Item>
                        {i18n.t('index.ecosystemList.1')}
                    </List.Item>
                    <List.Item>
                        {i18n.t('index.ecosystemList.2')}
                    </List.Item>
                    <List.Item>
                        <Stack
                            spacing={0}
                        >
                            {i18n.t('index.ecosystemList.3.title')}
                            <List
                                icon='·'
                                withPadding
                            >
                                <List.Item>
                                    {i18n.t('index.ecosystemList.3.item0')}
                                </List.Item>
                                <List.Item>
                                    {i18n.t('index.ecosystemList.3.item1')}
                                </List.Item>
                            </List>
                        </Stack>
                    </List.Item>
                    <List.Item>
                        <Stack
                            spacing={0}
                        >
                            {i18n.t('index.ecosystemList.4.title')}
                            <List
                                icon='·'
                                withPadding
                            >
                                <List.Item>
                                    {i18n.t('index.ecosystemList.4.item0')}
                                </List.Item>
                                <List.Item>
                                    {i18n.t('index.ecosystemList.4.item1')}
                                </List.Item>
                            </List>
                        </Stack>
                    </List.Item>
                </List>
            </Stack> */}
            <Stack
                className={s.section}
            >
                <Title>
                    {i18n.t('index.platform.title')}
                </Title>
            </Stack>
            <Stack
                className={s.section}
            >
                <Title
                    sx={{
                        textTransform: 'uppercase',
                    }}
                >
                    {i18n.t('index.platform.subtitle')}
                </Title>
                <Stack>
                    {(i18n.t('index.platform.items') as unknown as any[]).map((x, i) => (
                        <Text key={i}>
                            <Title order={3}>
                                {x.title}
                            </Title>
                            {x.text}
                        </Text>
                    ))}
                </Stack>
            </Stack>
            <Stack
                className={s.section}
            >
                <Text
                    size='xl'
                    weight='bold'
                >
                    {i18n.t('index.cta.text')}
                </Text>
            </Stack>
            <Stack
                className={s.section}
            >
                <Title>
                    {i18n.t('index.gsIs.title')}
                </Title>
                <List>
                    {(i18n.t('index.gsIs.items') as unknown as any[]).map((x, i) => (
                        <List.Item key={i}>
                            {x.title}
                            {x.items && (
                                <List>
                                    {x.items.map((y, j) => (
                                        <List.Item key={j}>
                                            {y}
                                        </List.Item>
                                    ))}
                                </List>
                            )}
                        </List.Item>
                    ))}
                </List>
            </Stack>
            <Stack
                className={s.section}
            >
                <Title order={2}
                    sx={{
                        textTransform: 'uppercase',
                    }}
                >
                    {i18n.t('index.timeline.title')}
                </Title>
                <Timeline
                    lineWidth={2}
                    radius='xl'
                    bulletSize={20}
                    active={i18n.t('index.timeline.items').length}
                    color={'gray'}
                    styles={{
                        itemTitle: {
                            textTransform: 'uppercase',
                            fontWeight: 'bold',
                        },
                        itemBullet: {
                            ['& > *']: {
                                fontSize: '.8em',
                            }
                        }
                    }}
                >
                    {(i18n.t('index.timeline.items', { limelineIcons }) as unknown as any[]).map((x, i) => (
                        <Timeline.Item
                            title={x.title}
                            bullet={limelineIcons?.[i]}
                        >
                            {x.text && x.text}
                        </Timeline.Item>
                    ))}
                </Timeline>
            </Stack>
            <Stack
                className={s.section}
            >
                <Title order={2}
                    sx={{
                        textTransform: 'uppercase',
                    }}
                >
                    {i18n.t('index.howItWorks.title')}
                </Title>
                <BackgroundImage
                    className={cx(s.hero)}
                    src='/howItWorks.png'
                />
            </Stack>
            <Stack
                className={s.section}
            >
                <Title order={2}
                    sx={{
                        textTransform: 'uppercase',
                    }}
                >
                    {i18n.t('index.structure.title')}
                </Title>
                <Text>
                    {i18n.t('index.structure.text')}
                </Text>
            </Stack>
            <Stack
                className={s.section}
            >
                <Title order={2}
                    sx={{
                        textTransform: 'uppercase',
                    }}
                >
                    {i18n.t('index.events.title')}
                </Title>
                {(i18n.t('index.events.items') as unknown as any[]).map((x, i) => (
                    <Text>
                        <b>
                            {x.bold}
                        </b>
                        {x.text}
                    </Text>
                ))}
            </Stack>
            <Stack
                className={s.section}
            >
                <Title order={2}
                    sx={{
                        textTransform: 'uppercase',
                    }}
                >
                    {i18n.t('index.roles.title')}
                </Title>
                {(i18n.t('index.roles.items') as unknown as any[]).map((x, i) => (
                    <Text>
                        <b>
                            {x.bold}
                        </b>
                        {x.text}
                    </Text>
                ))}
            </Stack>
            <Stack
                className={s.section}
            >
                <Title order={2}
                    sx={{
                        textTransform: 'uppercase',
                    }}
                >
                    {i18n.t('index.calendar.title')}
                </Title>
                <BackgroundImage
                    className={cx(s.hero)}
                    src='/calendar.png'
                />
            </Stack>
            <Stack
                className={s.section}
            >
                <Title order={2}
                    sx={{
                        textTransform: 'uppercase',
                    }}
                >
                    {i18n.t('index.rules.title')}
                </Title>
            </Stack>
            <Stack
                className={s.section}
            >
                <Title order={2}
                    sx={{
                        textTransform: 'uppercase',
                    }}
                >
                    {i18n.t('index.rules.communication.title')}
                </Title>
                <List>
                    {(i18n.t('index.rules.communication.items') as unknown as any[]).map((x, i) => (
                        <List.Item key={i}>
                            <Text>
                                {x}
                            </Text>
                        </List.Item>
                    ))}
                </List>
            </Stack>
            <Stack
                className={s.section}
            >
                <Title order={2}
                    sx={{
                        textTransform: 'uppercase',
                    }}
                >
                    {i18n.t('index.rules.gsGroup.title')}
                </Title>
                <List>
                    {(i18n.t('index.rules.gsGroup.items') as unknown as any[]).map((x, i) => (
                        <List.Item key={i}>
                            <Text>
                                {x}
                            </Text>
                        </List.Item>
                    ))}
                </List>
            </Stack>
            <Stack
                className={s.section}
            >
                <Title order={2}
                    sx={{
                        textTransform: 'uppercase',
                    }}
                >
                    {i18n.t('index.rules.gsVote.title')}
                </Title>
                <List>
                    {(i18n.t('index.rules.gsVote.items') as unknown as any[]).map((x, i) => (
                        <List.Item key={i}>
                            <Text>
                                {x}
                            </Text>
                        </List.Item>
                    ))}
                </List>
            </Stack>
        </Stack>
    )
}

export async function getStaticProps({ locale }) {
    const { default: lngDict = {} } = await import(`../locales/${locale}.json`)
    return {
        props: { lngDict }
    }
}