---
post_type: page
component_name: Breadcrumbs
title: Breadcrumbs
main_introduction: Breadcrumbs help users understand where they are in a nested
  hierarchy and allow them to navigate up to the parent levels.
sections:
  - type: block_list
    title: Anatomy
    blocks:
      - text: |-
          A) Parent page link

          B) Ellipsis (conditional \[Link to Variations > Long Breadcrumbs])

          C) Separator

          D) Current page label
        image: /assets/breadcrumbs_anatomy.png
  - type: block_list
    title: Behavior
    blocks:
      - text: >-
          Breadcrumbs use quaternary links \[Link] to allow the user to navigate
          to the parent pages. Parent page links have three interaction states:


          A) Default


          B) Hover


          C) Active
        image: /assets/breadcrumbs_behavior.png
      - title: Sizes
        text: |-
          Breadcrumbs come in four sizes to match with the type scales:

          A) Body

          B) Body large

          C) Headtitle

          D) Headline
        image: /assets/breadcrumbs_sizes.png
  - type: block_list
    title: Spacing
    blocks:
      - text: The distance between a link/icon/label and a separator should be 4px.
        image: /assets/breadcrumbs_spacing.png
  - type: block_list
    title: Variations
    blocks:
      - text: >-
          Breadcrumbs with a large number of levels can auto-collapse using
          ellipses to reduce screen clutter. This is useful when space is tight
          or for responsive designs.\

          The ellipsis icon button \[Link] triggers a contextual menu containing the collapsed links. It has three interaction states:


          A) Default


          B) Hover


          C) Active
        image: /assets/breadcrumbs_variations.png
      - {}
  - type: block_list
    title: Best practice
    blocks:
      - title: Links/Labels case
        text: Do not use uppercase in breadcrumbs labels.
        image: /assets/breadcrumbs_best_practice_1.png
      - title: Long links/labels
        text: Breadcrumbs with long links/labels will be truncated and rely on an
          ellipsis tooltip \[Link] to show the entire string.
        image: /assets/breadcrumbs_best_practice_2.png
      - title: Current page
        text: Do not use a link to represent the current page.
        image: /assets/breadcrumbs_best_practice_3.png
      - title: Long breadcrumbs
        text: Do not wrap breadcrumbs to multiple lines.
        image: /assets/breadcrumbs_best_practice_4.png
      - text: Do not wrap breadcrumbs to multiple lines.
        image: /assets/breadcrumbs_best_practice_5.png
      - title: "History vs hierarchy "
        text: Do not use breadcrumbs to show the user's history. Showing the actual
          steps the user took to get to the current page will not provide any
          benefit to the user and will create confusion.
        image: /assets/breadcrumbs_best_practice_6.png
      - text: Breadcrumbs should always show the hierarchical structure.
        image: /assets/breadcrumbs_best_practice_7.png
      - title: Don’t be evil 😈
        text: Breadcrumbs originate from fairy tales, but that's a different kind of
          storytelling. Please don’t do this.
        image: /assets/breadcrumbs_best_practice_8.png
---
