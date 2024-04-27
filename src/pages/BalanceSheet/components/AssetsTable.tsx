import React from 'react'
import { PlusIcon } from 'lucide-react'
import { useQuery } from '@tanstack/react-query'
import AddOrEditAssetDialog from './AddOrEditAssetDialog'
import { Button } from '@/components/ui/button'
import CashTable from './Cash/CashTable'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { BALANCE_SHEET } from '@/utils/query-keys'
import { fetchCashAsset } from '@/queries/assets'
import { useUserPreferences } from '@/hooks/use-user-preferences'
import { formatIndianMoneyNotation } from '@/utils/format-money'

export default function AssetsTable() {
  const cashQueryData = useQuery([BALANCE_SHEET.CASH], fetchCashAsset)
  const { preferences } = useUserPreferences()

  return (
    <div className='space-y-2'>
      <div className='flex justify-end'>
        <AddOrEditAssetDialog
          trigger={
            <Button>
              <PlusIcon className='mr-2 w-4 h-4' />
              <span>Add Asset</span>
            </Button>
          }
        />
      </div>

      <Accordion type='single' collapsible className='w-full'>
        <AccordionItem className='bg-gray-100/50 px-3 rounded-md my-2' value='item-1'>
          <AccordionTrigger className='text-lg'>
            <div>Cash</div>
            <div className='me-4'>
              {cashQueryData.data &&
                formatIndianMoneyNotation(
                  cashQueryData.data.reduce(
                    (totalBalance, asset) => totalBalance + parseFloat(asset.balance as any),
                    0,
                  ),
                )}{' '}
              {preferences.currencyUnit}
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <CashTable queryData={cashQueryData} />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
