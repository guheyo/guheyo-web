import { redirect } from 'next/navigation';

export interface Props {
  params: {
    groupSlug: string;
  };
}

function Page({ params: { groupSlug } }: Props) {
  return redirect(`${groupSlug}/market/offer`);
}

export default Page;
