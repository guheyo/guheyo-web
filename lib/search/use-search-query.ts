'use client';

import { useState, useEffect } from 'react';
import { useDebounce } from 'use-debounce';
import { useRouter, useSearchParams } from 'next/navigation';

export const useSearchQuery = (debounceDelay: number) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [text, setText] = useState('');
  const [keyword] = useDebounce(text, debounceDelay);

  useEffect(() => {
    const query = searchParams.get('q');
    if (query) {
      setText(query);
    }
  }, [searchParams]);

  useEffect(() => {
    const params = new URLSearchParams(searchParams as any);
    if (keyword) {
      params.set('q', keyword);
    } else {
      params.delete('q');
    }
    router.replace(`?${params.toString()}`);
  }, [keyword, router, searchParams]);

  return { text, setText, keyword };
};
