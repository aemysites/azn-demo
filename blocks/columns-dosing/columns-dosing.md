# Columns Dosing Block Template

## Example Usage

### Correction Phase (Green Background)

| Columns Dosing (green) |  |
|---|---|
|  | Correction Phase \| TID dosing |
| <div class="dosing-visual"><span class="dose-frequency">3x</span><span class="dose-per">/day</span><div class="dose-amount">10 g for up to 48 hours</div>![Correction Phase](./images/dosing-correction-phase.png)</div> | <ul><li>Once normokalemia is achieved, follow maintenance phase regimen</li><li>If normokalemia is not achieved at the start of day 3, other treatment approaches should be considered</li></ul> |

---

### Maintenance Phase (Pink Background)

| Columns Dosing (pink) |  |
|---|---|
|  | Maintenance Phase \| Once-daily dosing |
| <div class="dosing-visual"><span class="dose-frequency">1x</span><span class="dose-per">/day</span><div class="dose-amount">5 g</div>![Maintenance Phase](./images/dosing-maintenance-phase.png)</div> | <ul><li>Use minimal effective dose to prevent recurrence of hyperkalemia</li><li>Titrate in 5 g increments (as required), up ▲ to 10 g once a day or down ▼ to 5 g once every other day</li></ul> |

---

### Chronic Hemodialysis (Pink Background)

| Columns Dosing (pink) |  |
|---|---|
|  | Once-daily dosing only on non-dialysis days |
| <div class="dosing-visual"><span class="dose-frequency">1x</span><span class="dose-per">/day</span><div class="dose-amount">5 g</div>![Maintenance Phase](./images/dosing-maintenance-phase.png)</div> | <ul><li>No correction phase is necessary</li><li>Titrate up ▲ or down ▼ weekly to establish normokalemia</li><li>Based on pre-dialysis K+ value after the long inter-dialytic interval (LIDI)</li><li>Adjust dose in increments of 5 g up ▲ to 15 g or down ▼ to 0 for a few days</li></ul> |

---

### Administration (No Phase Title)

| Columns Dosing |  |
|---|---|
|  |  |
| <div class="admin-visual"><div class="water-amount">3 tbsp<br>45 mL<br>of water</div>![Administration](./images/dosing-administration.png)</div> | <ul><li>LOKELMA is white-to-grey, insoluble powder for oral use</li><li>Administer LOKELMA orally as a suspension in water</li><li>Empty the entire contents of the sachet(s) into a drinking glass</li><li>Stir well, and drink while the powder is still suspended</li></ul> |

---

## Block Structure

The Columns Dosing block requires a 2-column, 2-row table:

### Row 1 (Header Bar):
- **Left cell**: Empty
- **Right cell**: Phase title (e.g., "Correction Phase | TID dosing")

### Row 2 (Content):
- **Left column**: Dosing visual with custom HTML:
  - `<div class="dosing-visual">` container
  - `<span class="dose-frequency">`: Frequency (e.g., "3x", "1x")
  - `<span class="dose-per">`: Period (e.g., "/day")
  - `<div class="dose-amount">`: Dosage amount (e.g., "10 g for up to 48 hours")
  - `![Image](path)`: Dosing illustration
- **Right column**: Bullet list with dosing instructions

### Color Variants:
- **(green)**: Green background - used for Correction Phase
- **(pink)**: Pink background - used for Maintenance Phase and Hemodialysis
- **No variant**: Default styling - used for Administration

The block automatically applies the pink variant if the header text contains:
- "maintenance"
- "hemodialysis"
- "dialysis"

### Features:
- Large typography for dosing frequency and amount
- Two-column responsive layout
- Color-coded backgrounds (green for correction, pink for maintenance)
- Optimized images
- Stacks vertically on mobile
