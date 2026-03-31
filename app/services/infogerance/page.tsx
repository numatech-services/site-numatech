import type { Metadata } from 'next'
export const metadata: Metadata = { robots: { index: false } }

import { redirect } from 'next/navigation'
export default function Page() { redirect('/services-informatiques') }
