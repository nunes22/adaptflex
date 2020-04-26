'use strict';

var Css = require("bs-css-emotion/src/Css.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Css_Core = require("bs-css/src/Css_Core.js");

var default_typography = {
  fontFamily: "Fira Sans, sans-serif",
  small: 11,
  medium: 16,
  large: 20
};

var default_colors = {
  black: "444444",
  white: "ffffff",
  primaryLight: "e05a48",
  primary: "DD4B39",
  primaryDark: "c43421",
  border: "f0f0f0",
  bodyBackground: "ECF0F1",
  bodyText: "444444",
  cardBackground: "ffffff"
};

var default_spacing = {
  small: 3,
  medium: 12,
  large: 36
};

var default_borders = {
  borderRadius: Css.px(3)
};

var $$default = {
  typography: default_typography,
  colors: default_colors,
  spacing: default_spacing,
  borders: default_borders
};

var defaultDark_typography = {
  fontFamily: "Fira Sans, sans-serif",
  small: 11,
  medium: 16,
  large: 20
};

var defaultDark_colors = {
  black: "444444",
  white: "ffffff",
  primaryLight: "e05a48",
  primary: "DD4B39",
  primaryDark: "c43421",
  border: "222222",
  bodyBackground: "444444",
  bodyText: "ffffff",
  cardBackground: "333333"
};

var defaultDark_spacing = {
  small: 3,
  medium: 12,
  large: 36
};

var defaultDark_borders = {
  borderRadius: Css.px(3)
};

var defaultDark = {
  typography: defaultDark_typography,
  colors: defaultDark_colors,
  spacing: defaultDark_spacing,
  borders: defaultDark_borders
};

var rainbow_typography = {
  fontFamily: "Georgia, serif",
  small: 11,
  medium: 16,
  large: 20
};

var rainbow_colors = {
  black: "444444",
  white: "ffffff",
  primaryLight: "e04882",
  primary: "DD3978",
  primaryDark: "DD3978",
  border: "f0f0f0",
  bodyBackground: "ECF0F1",
  bodyText: "444444",
  cardBackground: "ffffff"
};

var rainbow_spacing = {
  small: 3,
  medium: 12,
  large: 36
};

var rainbow_borders = {
  borderRadius: Css.px(0)
};

var rainbow = {
  typography: rainbow_typography,
  colors: rainbow_colors,
  spacing: rainbow_spacing,
  borders: rainbow_borders
};

var rainbowDark_typography = {
  fontFamily: "Georgia, serif",
  small: 11,
  medium: 16,
  large: 20
};

var rainbowDark_colors = {
  black: "444444",
  white: "ffffff",
  primaryLight: "e04882",
  primary: "DD3978",
  primaryDark: "DD3978",
  border: "222222",
  bodyBackground: "444444",
  bodyText: "ffffff",
  cardBackground: "333333"
};

var rainbowDark_spacing = {
  small: 3,
  medium: 12,
  large: 36
};

var rainbowDark_borders = {
  borderRadius: Css.px(0)
};

var rainbowDark = {
  typography: rainbowDark_typography,
  colors: rainbowDark_colors,
  spacing: rainbowDark_spacing,
  borders: rainbowDark_borders
};

var noSpacing_000 = Css.padding(Css.zero);

var noSpacing_001 = /* :: */[
  Css.margin(Css.zero),
  /* [] */0
];

var noSpacing = /* :: */[
  noSpacing_000,
  noSpacing_001
];

var fullWidth = Curry._1(Css.style, /* :: */[
      Css.width(Css.pct(100)),
      /* [] */0
    ]);

function fullScreen(theme) {
  return Curry._1(Css.style, /* :: */[
              Css.position(Css.absolute),
              /* :: */[
                Css.left(Css.px(theme.spacing.medium)),
                /* :: */[
                  Css.right(Css.px(theme.spacing.medium)),
                  /* :: */[
                    Css.top(Css.px(theme.spacing.medium)),
                    /* :: */[
                      Css.bottom(Css.px(theme.spacing.medium)),
                      /* [] */0
                    ]
                  ]
                ]
              ]
            ]);
}

function defaultBorder(theme) {
  return Curry._1(Css.style, /* :: */[
              Css.border(Css.px(1), Css.solid, Css.hex(theme.colors.border)),
              /* :: */[
                Css.borderRadius(Css.px(3)),
                /* [] */0
              ]
            ]);
}

function spacingSmallBottom(theme) {
  return Curry._1(Css.style, /* :: */[
              Css.marginBottom(Css.px(theme.spacing.small)),
              /* [] */0
            ]);
}

function spacingMediumBottom(theme) {
  return Curry._1(Css.style, /* :: */[
              Css.marginBottom(Css.px(theme.spacing.medium)),
              /* [] */0
            ]);
}

function spacingLargeBottom(theme) {
  return Curry._1(Css.style, /* :: */[
              Css.marginBottom(Css.px(theme.spacing.large)),
              /* [] */0
            ]);
}

function globalStyles(param) {
  Curry._2(Css.$$global, "html, #app", /* :: */[
        Css.height(Css.pct(100)),
        /* [] */0
      ]);
  Curry._2(Css.$$global, "body", /* :: */[
        Css.height(Css.pct(100)),
        noSpacing
      ]);
  Curry._2(Css.$$global, "input", noSpacing);
  Curry._2(Css.$$global, "h1,h2,h3,h4,h5,h6", /* :: */[
        Css.lineHeight(/* `abs */[
              4845682,
              1
            ]),
        noSpacing
      ]);
  return Curry._2(Css.$$global, "ul,ol,dl", /* :: */[
              Css.listStyleType(/* none */-922086728),
              /* :: */[
                Css.lineHeight(/* `abs */[
                      4845682,
                      1
                    ]),
                noSpacing
              ]
            ]);
}

function containerStyles(theme) {
  return Curry._1(Css.style, /* :: */[
              Css.fontFamily(/* `custom */[
                    1066567601,
                    theme.typography.fontFamily
                  ]),
              /* :: */[
                Css.fontSize(Css.px(theme.typography.medium)),
                /* :: */[
                  Css.backgroundColor(Css.hex(theme.colors.bodyBackground)),
                  /* :: */[
                    Css.color(Css.hex(theme.colors.bodyText)),
                    /* :: */[
                      Css.height(Css.pct(100)),
                      /* [] */0
                    ]
                  ]
                ]
              ]
            ]);
}

function h1Styles(theme) {
  return Curry._1(Css.style, /* :: */[
              Css.fontSize(Css.px(theme.typography.large)),
              /* [] */0
            ]);
}

function cardStyles(theme) {
  var shadow1 = Css_Core.Shadow.box(Css.zero, Css.px(1), Css.px(3), Css.zero, undefined, Css.rgba(0, 0, 0, 0.12));
  var shadow2 = Css_Core.Shadow.box(Css.zero, Css.px(1), Css.px(2), Css.zero, undefined, Css.rgba(0, 0, 0, 0.24));
  return Curry._1(Css.merge, /* :: */[
              defaultBorder(theme),
              /* :: */[
                Curry._1(Css.style, /* :: */[
                      Css.backgroundColor(Css.hex(theme.colors.cardBackground)),
                      /* :: */[
                        Css.border(Css.px(1), Css.solid, Css.hex(theme.colors.border)),
                        /* :: */[
                          Css.borderRadius(theme.borders.borderRadius),
                          /* :: */[
                            Css.boxShadows(/* :: */[
                                  shadow1,
                                  /* :: */[
                                    shadow2,
                                    /* [] */0
                                  ]
                                ]),
                            /* :: */[
                              Css.display(/* inlineBlock */-147785676),
                              /* :: */[
                                Css.padding(Css.px(theme.spacing.large)),
                                /* [] */0
                              ]
                            ]
                          ]
                        ]
                      ]
                    ]),
                /* [] */0
              ]
            ]);
}

function inputStyles(theme) {
  return Curry._1(Css.merge, /* :: */[
              defaultBorder(theme),
              /* :: */[
                Curry._1(Css.style, /* :: */[
                      Css.fontFamily(/* `custom */[
                            1066567601,
                            theme.typography.fontFamily
                          ]),
                      /* :: */[
                        Css.fontSize(Css.px(theme.typography.medium)),
                        /* :: */[
                          Css.backgroundColor(Css.hex(theme.colors.cardBackground)),
                          /* :: */[
                            Css.color(Css.hex(theme.colors.bodyText)),
                            /* :: */[
                              Css.boxSizing(Css.borderBox),
                              /* :: */[
                                Css.padding(Css.px(theme.spacing.medium)),
                                /* :: */[
                                  Css.transition(330, undefined, Css.cubicBezier(0.18, 0.8, 0.44, 1.0), "all"),
                                  /* :: */[
                                    Css.hover(/* :: */[
                                          Css.boxShadow(Css_Core.Shadow.box(Css.zero, Css.zero, Css.zero, Css.px(1), true, Css.hex("a7a7aa"))),
                                          /* [] */0
                                        ]),
                                    /* :: */[
                                      Css.focus(/* :: */[
                                            Css.outlineWidth(Css.zero),
                                            /* :: */[
                                              Css.boxShadows(/* :: */[
                                                    Css_Core.Shadow.box(Css.zero, Css.zero, Css.zero, Css.px(1), true, Css.hex("a7a7aa")),
                                                    /* :: */[
                                                      Css_Core.Shadow.box(Css.zero, Css.zero, Css.zero, Css.px(3), undefined, Css.rgba(167, 167, 170, 0.3)),
                                                      /* [] */0
                                                    ]
                                                  ]),
                                              /* [] */0
                                            ]
                                          ]),
                                      /* [] */0
                                    ]
                                  ]
                                ]
                              ]
                            ]
                          ]
                        ]
                      ]
                    ]),
                /* [] */0
              ]
            ]);
}

function buttonStyles(theme, variant, size) {
  var tmp;
  switch (size) {
    case /* Small */0 :
        tmp = Css.padding2(Css.px(theme.spacing.small), Css.px(theme.spacing.small + 9 | 0));
        break;
    case /* Medium */1 :
        tmp = Css.padding(Css.px(theme.spacing.medium));
        break;
    case /* Large */2 :
        tmp = Css.padding(Css.px(theme.spacing.large));
        break;
    
  }
  var baseStyles = Curry._1(Css.style, /* :: */[
        Css.cursor(/* pointer */-786317123),
        /* :: */[
          Css.transition(3, undefined, Css.linear, "all"),
          /* :: */[
            Css.fontFamily(/* `custom */[
                  1066567601,
                  theme.typography.fontFamily
                ]),
            /* :: */[
              Css.fontSize(Css.px(theme.typography.medium)),
              /* :: */[
                Css.borderRadius(theme.borders.borderRadius),
                /* :: */[
                  Css.fontWeight(Css.bold),
                  /* :: */[
                    Css.transition(330, undefined, Css.cubicBezier(0.18, 0.8, 0.44, 1.0), "all"),
                    /* :: */[
                      tmp,
                      /* [] */0
                    ]
                  ]
                ]
              ]
            ]
          ]
        ]
      ]);
  switch (variant) {
    case /* Default */0 :
        return Curry._1(Css.merge, /* :: */[
                    baseStyles,
                    /* :: */[
                      Curry._1(Css.style, /* :: */[
                            Css.backgroundColor(Css.hex(theme.colors.cardBackground)),
                            /* :: */[
                              Css.color(Css.hex(theme.colors.bodyText)),
                              /* :: */[
                                Css.border(Css.px(1), Css.solid, Css.hex(theme.colors.bodyBackground)),
                                /* :: */[
                                  Css.hover(/* :: */[
                                        Css.backgroundColor(Css.hex(theme.colors.bodyBackground)),
                                        /* [] */0
                                      ]),
                                  /* [] */0
                                ]
                              ]
                            ]
                          ]),
                      /* [] */0
                    ]
                  ]);
    case /* Primary */1 :
        return Curry._1(Css.merge, /* :: */[
                    baseStyles,
                    /* :: */[
                      Curry._1(Css.style, /* :: */[
                            Css.backgroundColor(Css.hex(theme.colors.primary)),
                            /* :: */[
                              Css.color(Css.hex(theme.colors.white)),
                              /* :: */[
                                Css.border(Css.px(1), Css.solid, Css.hex(theme.colors.primary)),
                                /* :: */[
                                  Css.padding(Css.px(theme.spacing.medium)),
                                  /* :: */[
                                    Css.hover(/* :: */[
                                          Css.backgroundColor(Css.hex(theme.colors.primaryLight)),
                                          /* [] */0
                                        ]),
                                    /* [] */0
                                  ]
                                ]
                              ]
                            ]
                          ]),
                      /* [] */0
                    ]
                  ]);
    case /* Ghost */2 :
        return Curry._1(Css.merge, /* :: */[
                    baseStyles,
                    /* :: */[
                      Curry._1(Css.style, /* :: */[
                            Css.backgroundColor(Css.transparent),
                            /* :: */[
                              Css.border(Css.px(1), Css.solid, Css.transparent),
                              /* :: */[
                                Css.hover(/* :: */[
                                      Css.borderColor(Css.hex(theme.colors.bodyBackground)),
                                      /* :: */[
                                        Css.backgroundColor(Css.hex(theme.colors.bodyBackground)),
                                        /* [] */0
                                      ]
                                    ]),
                                /* [] */0
                              ]
                            ]
                          ]),
                      /* [] */0
                    ]
                  ]);
    
  }
}

function toolbarStyles(theme) {
  return Curry._1(Css.style, /* :: */[
              Css.display(/* flex */-1010954439),
              /* :: */[
                Css.justifyContent(Css.spaceBetween),
                /* :: */[
                  Css.alignItems(Css.center),
                  /* :: */[
                    Css.backgroundColor(Css.hex(theme.colors.primary)),
                    /* :: */[
                      Css.padding(Css.px(theme.spacing.medium)),
                      /* [] */0
                    ]
                  ]
                ]
              ]
            ]);
}

function dataGridItemStyles(theme) {
  return Curry._1(Css.style, /* :: */[
              Css.padding(Css.px(theme.spacing.medium)),
              /* :: */[
                Css.display(/* flex */-1010954439),
                /* :: */[
                  Css.justifyContent(Css.spaceBetween),
                  /* :: */[
                    Css.alignItems(Css.center),
                    /* :: */[
                      Css.borderBottom(Css.px(1), Css.solid, Css.hex(theme.colors.border)),
                      /* :: */[
                        Css.selector(":last-child", /* :: */[
                              Css.borderBottomWidth(Css.zero),
                              /* [] */0
                            ]),
                        /* [] */0
                      ]
                    ]
                  ]
                ]
              ]
            ]);
}

function dataGridToolbarStyles(theme) {
  return Curry._1(Css.style, /* :: */[
              Css.display(/* flex */-1010954439),
              /* :: */[
                Css.alignItems(Css.center),
                /* :: */[
                  Css.backgroundColor(Css.hex(theme.colors.bodyBackground)),
                  /* :: */[
                    Css.padding(Css.px(theme.spacing.medium)),
                    /* [] */0
                  ]
                ]
              ]
            ]);
}

exports.$$default = $$default;
exports.default = $$default;
exports.__esModule = true;
exports.defaultDark = defaultDark;
exports.rainbow = rainbow;
exports.rainbowDark = rainbowDark;
exports.noSpacing = noSpacing;
exports.fullWidth = fullWidth;
exports.fullScreen = fullScreen;
exports.defaultBorder = defaultBorder;
exports.spacingSmallBottom = spacingSmallBottom;
exports.spacingMediumBottom = spacingMediumBottom;
exports.spacingLargeBottom = spacingLargeBottom;
exports.globalStyles = globalStyles;
exports.containerStyles = containerStyles;
exports.h1Styles = h1Styles;
exports.cardStyles = cardStyles;
exports.inputStyles = inputStyles;
exports.buttonStyles = buttonStyles;
exports.toolbarStyles = toolbarStyles;
exports.dataGridItemStyles = dataGridItemStyles;
exports.dataGridToolbarStyles = dataGridToolbarStyles;
/* default Not a pure module */
