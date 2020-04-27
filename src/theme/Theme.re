open Css;

type typography = {
  fontFamily: string,
  small: int,
  medium: int,
  large: int,
};

type colors = {
  black: string,
  white: string,
  primaryLight: string,
  primary: string,
  primaryDark: string,
  border: string,
  bodyBackground: string,
  bodyText: string,
  cardBackground: string,
};

type spacing = {
  small: int,
  medium: int,
  large: int,
};

type borders = {borderRadius: Types.Length.t};

type theme = {
  typography,
  colors,
  spacing,
  borders,
};

let default = {
  borders: {
    borderRadius: px(3),
  },
  typography: {
    fontFamily: "Fira Sans, sans-serif",
    small: 11,
    medium: 16,
    large: 20,
  },
  colors: {
    black: "444444",
    white: "ffffff",
    primaryLight: "e05a48",
    primary: "DD4B39",
    primaryDark: "c43421",
    border: "f0f0f0",
    bodyBackground: "ECF0F1",
    cardBackground: "ffffff",
    bodyText: "444444",
  },
  spacing: {
    small: 3,
    medium: 12,
    large: 36,
  },
};

let defaultDark = {
  borders: {
    borderRadius: px(3),
  },
  typography: {
    fontFamily: "Fira Sans, sans-serif",
    small: 11,
    medium: 16,
    large: 20,
  },
  colors: {
    black: "444444",
    white: "ffffff",
    primaryLight: "e05a48",
    primary: "DD4B39",
    primaryDark: "c43421",
    border: "222222",
    bodyBackground: "444444",
    cardBackground: "333333",
    bodyText: "ffffff",
  },
  spacing: {
    small: 3,
    medium: 12,
    large: 36,
  },
};

let rainbow = {
  borders: {
    borderRadius: px(0),
  },
  typography: {
    fontFamily: "Georgia, serif",
    small: 11,
    medium: 16,
    large: 20,
  },
  colors: {
    black: "444444",
    white: "ffffff",
    primaryLight: "e04882",
    primary: "DD3978",
    primaryDark: "DD3978",
    border: "f0f0f0",
    bodyBackground: "ECF0F1",
    cardBackground: "ffffff",
    bodyText: "444444",
  },
  spacing: {
    small: 3,
    medium: 12,
    large: 36,
  },
};

let rainbowDark = {
  borders: {
    borderRadius: px(0),
  },
  typography: {
    fontFamily: "Georgia, serif",
    small: 11,
    medium: 16,
    large: 20,
  },
  colors: {
    black: "444444",
    white: "ffffff",
    primaryLight: "e04882",
    primary: "DD3978",
    primaryDark: "DD3978",
    border: "222222",
    bodyBackground: "444444",
    cardBackground: "333333",
    bodyText: "ffffff",
  },
  spacing: {
    small: 3,
    medium: 12,
    large: 36,
  },
};

type variant =
  | Default
  | Primary;

type size =
  | Small
  | Medium
  | Large;

let noSpacing = [padding(zero), margin(zero)];

// Utilities
// ----------------------------------------
let fullWidth = style([width(pct(100.))]);
let fullScreen = theme =>
  style([
    position(absolute),
    left(px(theme.spacing.medium)),
    right(px(theme.spacing.medium)),
    top(px(theme.spacing.medium)),
    bottom(px(theme.spacing.medium)),
  ]);
let defaultBorder = theme =>
  style([
    border(px(1), solid, Css.hex(theme.colors.border)),
    borderRadius(px(3)),
  ]);

// Spacing
// ----------------------------------------
let spacingSmallBottom = theme =>
  style([marginBottom(px(theme.spacing.small))]);
let spacingMediumBottom = theme =>
  style([marginBottom(px(theme.spacing.medium))]);
let spacingLargeBottom = theme =>
  style([marginBottom(px(theme.spacing.large))]);

// Global/Container
// ----------------------------------------
let globalStyles = theme => {
  global("html, #app", [height(pct(100.))]);
  global("body", [fontFamily(`custom(theme.typography.fontFamily)), height(pct(100.)), ...noSpacing]);
  global("input", noSpacing);
  global("h1,h2,h3,h4,h5,h6", [lineHeight(`abs(1.)), ...noSpacing]);
  global(
    "ul,ol,dl",
    [listStyleType(`none), lineHeight(`abs(1.)), ...noSpacing],
  );
};

let containerStyles = theme => {
  style([
    fontFamily(`custom(theme.typography.fontFamily)),
    fontSize(px(theme.typography.medium)),
    backgroundColor(Css.hex(theme.colors.bodyBackground)),
    color(Css.hex(theme.colors.bodyText)),
    height(pct(100.)),
  ]);
};

// Typography
// ----------------------------------------
let h1Styles = theme => {
  style([fontSize(px(theme.typography.large))]);
};

// Card
// ----------------------------------------
let cardStyles = theme => {
  let shadow1 =
    Shadow.box(
      ~x=zero,
      ~y=px(1),
      ~blur=px(3),
      ~spread=zero,
      Css.rgba(0, 0, 0, 0.12),
    );
  let shadow2 =
    Shadow.box(
      ~x=zero,
      ~y=px(1),
      ~blur=px(2),
      ~spread=zero,
      Css.rgba(0, 0, 0, 0.24),
    );

  merge([
    defaultBorder(theme),
    style([
      backgroundColor(Css.hex(theme.colors.cardBackground)),
      border(px(1), solid, Css.hex(theme.colors.border)),
      borderRadius(theme.borders.borderRadius),
      boxShadows([shadow1, shadow2]),
      display(`inlineBlock),
      padding(px(theme.spacing.large)),
    ]),
  ]);
};

// Forms
// ----------------------------------------
let inputStyles = theme =>
  merge([
    defaultBorder(theme),
    style([
      fontFamily(`custom(theme.typography.fontFamily)),
      fontSize(px(theme.typography.medium)),
      backgroundColor(Css.hex(theme.colors.cardBackground)),
      color(Css.hex(theme.colors.bodyText)),
      boxSizing(borderBox),
      padding(px(theme.spacing.medium)),
      transition(
        ~duration=330,
        ~timingFunction=cubicBezier(0.18, 0.8, 0.44, 1.0),
        "all",
      ),
      hover([
        boxShadow(
          Shadow.box(
            ~x=zero,
            ~y=zero,
            ~blur=zero,
            ~spread=px(1),
            ~inset=true,
            Css.hex("a7a7aa"),
          ),
        ),
      ]),
      focus([
        outlineWidth(zero),
        boxShadows([
          Shadow.box(
            ~x=zero,
            ~y=zero,
            ~blur=zero,
            ~spread=px(1),
            ~inset=true,
            Css.hex("a7a7aa"),
          ),
          Shadow.box(
            ~x=zero,
            ~y=zero,
            ~blur=zero,
            ~spread=px(3),
            Css.rgba(167, 167, 170, 0.3),
          ),
        ]),
        // 0 0 0 1px #a7a7aa inset, 0 0 0 4px rgba(167,167,170,0.3)
      ]),
    ]),
  ]);

// Buttons
// ----------------------------------------
type buttonVariant =
  | Default
  | Primary
  | Secondary
  | Ghost
  | Link;

let buttonStyles = (~theme, ~variant: buttonVariant, ~size) => {
  let baseStyles =
    style([
      display(inlineBlock),
      cursor(`pointer),
      transition(~duration=3, ~timingFunction=linear, "all"),
      fontFamily(`custom(theme.typography.fontFamily)),
      fontSize(px(theme.typography.medium)),
      borderRadius(theme.borders.borderRadius),
      fontWeight(bold),
      textDecoration(none),
      transition(
        ~duration=330,
        ~timingFunction=cubicBezier(0.18, 0.8, 0.44, 1.0),
        "all",
      ),
      switch (size) {
      | Small =>
        padding2(~h=px(theme.spacing.small + 9), ~v=px(theme.spacing.small))
      | Medium =>
        padding2(
          ~v=px(theme.spacing.small + 9),
          ~h=px(theme.spacing.medium),
        )
      | Large =>
        padding2(~v=px(theme.spacing.small + 9), ~h=px(theme.spacing.large))
      },
    ]);

  switch (variant) {
  | Link =>
    merge([
      baseStyles,
      style([
        padding(zero),
        fontWeight(normal),
        backgroundColor(hex("transparent")),
        color(hex(theme.colors.primary)),
        hover([color(hex(theme.colors.primaryDark))]),
      ]),
    ])
  | Secondary =>
    merge([
      baseStyles,
      style([
        backgroundColor(hex("333")),
        color(hex(theme.colors.white)),
        border(px(1), solid, hex("333")),
        hover([backgroundColor(hex("555"))]),
      ]),
    ])
  | Ghost =>
    merge([
      baseStyles,
      style([
        backgroundColor(transparent),
        border(px(1), solid, transparent),
        hover([
          borderColor(hex(theme.colors.bodyBackground)),
          backgroundColor(hex(theme.colors.bodyBackground)),
        ]),
      ]),
    ])
  | Default =>
    merge([
      baseStyles,
      style([
        backgroundColor(hex(theme.colors.cardBackground)),
        color(hex(theme.colors.bodyText)),
        border(px(1), solid, hex(theme.colors.bodyBackground)),
        hover([backgroundColor(hex(theme.colors.bodyBackground))]),
      ]),
    ])
  | Primary =>
    merge([
      baseStyles,
      style([
        backgroundColor(hex(theme.colors.primary)),
        color(hex(theme.colors.white)),
        border(px(1), solid, hex(theme.colors.primary)),
        hover([backgroundColor(hex(theme.colors.primaryLight))]),
      ]),
    ])
  };
};

// Toolbar
// ----------------------------------------
let toolbarStyles = theme =>
  style([
    display(`flex),
    justifyContent(spaceBetween),
    alignItems(center),
    backgroundColor(Css.hex(theme.colors.primary)),
    padding(px(theme.spacing.medium)),
  ]);

// DataGrid
// ----------------------------------------
let dataGridItemStyles = theme =>
  style([
    padding(px(theme.spacing.medium)),
    display(`flex),
    justifyContent(spaceBetween),
    alignItems(center),
    borderBottom(px(1), solid, Css.hex(theme.colors.border)),
    selector(":last-child", [borderBottomWidth(zero)]),
  ]);
let dataGridToolbarStyles = theme =>
  style([
    display(`flex),
    alignItems(center),
    backgroundColor(Css.hex(theme.colors.bodyBackground)),
    padding(px(theme.spacing.medium)),
  ]);