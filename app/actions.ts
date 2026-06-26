
'use server'

import { supabase } from '@/lib/supabase'

export async function getCampaigns() {
    try {
        const { data, error } = await supabase
            .from('notifications')
            .select('*')
            .order('created_at', { ascending: false })

        if (error) {
            console.error('Error fetching campaigns:', error)
            return []
        }

        return data || []
    } catch (error) {
        console.error('Unexpected error fetching campaigns:', error)
        return []
    }
}
