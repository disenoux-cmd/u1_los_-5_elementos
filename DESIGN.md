# Design System

## Direction

The interface treats classroom management as a connected pedagogical control surface. A top-view classroom plan is the primary navigation and five routed signals converge on a shared learning table. The system avoids a generic grid of equal concept cards.

## Color

- Ink `#102a3b`: primary text, structural surfaces, and the connection section.
- Cold paper `#f3f6f3`: main learning surface.
- Learning yellow `#f8c900`: entry action and final synthesis field.
- Space coral `#e85d3f`.
- Time amber `#f2b134`.
- Subject violet `#5c67d8`.
- Students green `#20a680`.
- Eco blue `#1976b9`.

Element colors identify routes and state. They do not replace text labels.

## Typography

Archivo is the display and control face, using its width axis and strong weight for concise instructional statements. Atkinson Hyperlegible is used for explanations, feedback, and longer reading. Display tracking never exceeds `-0.04em`; body copy uses generous line height.

## Shape And Material

The visual language comes from classroom plans and teaching diagrams: fine construction lines, circular group tables, dashed routes, paper fields, and flat ink. Structural corners remain square; circles belong to people, points, and shared tables. Shadows are limited to active controls and raised detail panels.

The interactive map uses authored top-view classroom illustrations rather than abstract furniture symbols. `classroom.jpg` provides a landscape composition for desktop, while `classroom-mobile.jpg` preserves the complete learning scene in a dedicated portrait composition. Hotspots align with recognizable evidence in each scene: clock, board, furniture, students, and facilitator.

## Components

- Hotspots combine a colored signal, persistent text label, visited check, and routed line.
- The detail drawer is a focused reading surface with two concepts, one multiple-choice microdecision, immediate feedback, and one reflection prompt.
- Progress represents elements opened during the current session and does not imply saved completion.
- Connection results combine the two most recently opened elements and explain their pedagogical relationship.
- The thinking routine reveals prompts for use in an external metacognition journal; it never presents unsaved form fields.

## Motion

The authored motion is signal flow: dashed routes travel into the shared learning table and the selected route becomes solid. The entry transition reveals the control surface as one composition. All nonessential animation is removed when `prefers-reduced-motion` is active.

## Responsive Behavior

Desktop keeps the classroom plan broad and the detail drawer to the right. Mobile preserves the plan rather than replacing it with cards, stacks explanatory copy above it, and uses a full-width detail dialog. Controls maintain at least a 44px target where space permits.

## Accessibility

All interactions are buttons with visible focus, names, and keyboard support. The detail panel uses dialog semantics, traps focus while open, closes with Escape, and restores focus to its hotspot. Color is reinforced by labels and state marks. Content uses inclusive language and high-contrast surfaces.
