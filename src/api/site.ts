import { req } from '@/api/axios';
import { Event, SearchResult } from '@/utils';

export const getEvent = async (id: number) => {
  const json = await req.get(`/events/${id}`);
  return (json.data.event as Event) ?? false;
};

/* export const getEvent = async (id: number) => {
  const { data } = await req.get(`/events/${id}`);

  return (data as Event) ?? false;
};
 */
export const searchCPF = async (
  eventId: number,
  cpf: string
): Promise<SearchResult | false> => {
  const json = await req.get(`/events/${eventId}/search?cpf=${cpf}`);

  if (json.data.person && json.data.personMatched) {
    return json.data as SearchResult;
  } else {
    return false;
  }
};
