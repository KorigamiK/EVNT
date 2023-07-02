import { type NextPage } from "next";
import Nav from "~/components/Nav";
import Card from "~/components/Card";
import { api } from "~/utils/api";
import Head from "next/head";
import Section from "~/components/Section";
import Link from "next/link";

const Discover: NextPage = () => {
  const { data: events, refetch } = api.event.getAllEvents.useQuery();
  const { data: userEnrolledEvents, refetch: userEnrolledRetched } =
    api.user.getEnrolledEvents.useQuery();

  const mutation = api.user.enrollUser.useMutation({
    onSuccess: async () => {
      await Promise.all([refetch(), userEnrolledRetched()]);
    },
  });
  return (
    <>
      <Head>
        <title>EVNT - Discover</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Section>
        <Nav />
        <div className="flex items-center justify-between">
          <h2 className="mt-10 font-primary text-6xl text-slate-800 underline">
            Discover
          </h2>
          <Link href="/create">
            <button className="floating mt-10 cursor-pointer rounded-2xl bg-slate-800 p-3 px-8 font-primary text-2xl text-white transition-all hover:bg-slate-700 hover:opacity-90">
              Create Event
            </button>
          </Link>
        </div>
        <p className="mt-5 font-secondary text-xl">
          Discover the latest and greatest events happening in town!
        </p>

        <div className="mt-10 grid grid-cols-3 gap-8">
          {events ? (
            events.map((event) => (
              <Card
                key={event.id}
                event={event}
                mutation={mutation}
                isPurchased={
                  (userEnrolledEvents?.findIndex(
                    (item) => item.id === event.id
                  ) ?? -1) >= 0
                }
              />
            ))
          ) : (
            <>Loading...</>
          )}
        </div>
      </Section>
      <Section className="my-10 rounded-3xl bg-slate-800 py-10 text-center font-primary text-2xl font-bold text-slate-100">
        Created With ❤️ By The Evnt Team
      </Section>
    </>
  );
};

export default Discover;
