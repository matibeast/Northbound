import * as React from "react"
import { ScreenScaffold } from "@/components/ui/screen-scaffold"
import { AmountCluster } from "@/components/ui/amount-cluster"
import { Badge } from "@/components/ui/badge"
import { ChipGroup } from "@/components/ui/chip-group"
import { MovementBreakdown } from "@/components/ui/movement-breakdown"
import { Button } from "@/components/ui/button"

// Figma screen: Deposit / Add Money (node 119:3582)
// Composition: ScreenScaffold > AmountCluster + Badge + ChipGroup + MovementBreakdown + Button

function DepositScreen() {
  const [selectedPreset, setSelectedPreset] = React.useState("5000")

  return (
    <ScreenScaffold
      appBarCentered
      appBarShowLeading
      appBarShowSubtitle={false}
      appBarShowTrailing
      appBarTitle="Add money"
    >
      <div className="flex flex-col gap-8 items-start w-full">

        {/* Amount input + badge + preset chips */}
        <div className="flex flex-col gap-6 items-start w-full">
          <AmountCluster
            className="w-full"
            size="lg"
            label="How much do you want to add?"
            prefix="$"
            suffix="MXN"
            defaultValue="5,000.00"
            appearance="filled"
            helperText="From your account in Mexican pesos"
            showHelperText
          />

          <Badge
            variant="success"
            value="$287.79"
            caption="will be received"
            showIcon
          />

          <ChipGroup
            className="w-full"
            defaultValue="5000"
            value={selectedPreset}
            onChange={setSelectedPreset}
            items={[
              { label: "$2,000", value: "2000" },
              { label: "$5,000", value: "5000" },
              { label: "$10,000", value: "10000" },
            ]}
          />
        </div>

        <MovementBreakdown className="w-full" />

        <Button variant="primary" size="md" className="w-full">
          Add $287.79 to your account
        </Button>

      </div>
    </ScreenScaffold>
  )
}

export { DepositScreen }
