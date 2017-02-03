const population = 4645382

const states = {
  TX: {
    respondents: 374389,
    INTJ: {
      A: 1.11,
      T: 1.13
    },
    INTP: {
      A: 1.76,
      T: 2.2
    },
    ENTJ: {
      A: 1.19,
      T: 0.79
    },
    ENTP: {
      A: 2.32,
      T: 1.56
    },
    INFJ: {
      A: 1.35,
      T: 3.06
    },
    INFP: {
      A: 2.44,
      T: 5.79
    },
    ENFJ: {
      A: 2.3,
      T: 2.01
    },
    ENFP: {
      A: 4.58,
      T: 4.4
    },
    ISTJ: {
      A: null,
      T: null
    },
    ISFJ: {
      A: null,
      T: null
    },
    ESTJ: {
      A: null,
      T: null
    },
    ESFJ: {
      A: null,
      T: null
    },
    ISTP: {
      A: null,
      T: null
    },
    ISFP: {
      A: null,
      T: null
    },
    ESTP: {
      A: null,
      T: null
    },
    ESFP: {
      A: null,
      T: null
    }
  },
  OK: {
    respondents: 49348,
    INTJ: {
      A: 1.05,
      T: 1.22
    },
    INTP: {
      A: 1.55,
      T: 1.97
    },
    ENTJ: {
      A: 0.98,
      T: 0.65
    },
    ENTP: {
      A: 2.01,
      T: 1.22
    },
    INFJ: {
      A: 1.31,
      T: 3.21
    },
    INFP: {
      A: 2.5,
      T: 6.27
    },
    ENFJ: {
      A: 2.06,
      T: 1.88
    },
    ENFP: {
      A: 4.11,
      T: 4.08
    },
    ISTJ: {
      A: null,
      T: null
    },
    ISFJ: {
      A: null,
      T: null
    },
    ESTJ: {
      A: null,
      T: null
    },
    ESFJ: {
      A: null,
      T: null
    },
    ISTP: {
      A: null,
      T: null
    },
    ISFP: {
      A: null,
      T: null
    },
    ESTP: {
      A: null,
      T: null
    },
    ESFP: {
      A: null,
      T: null
    }
  }, 
  KS: {
    respondents: 42481,
    INTJ: {
      A: 1.01,
      T: 1.07
    },
    INTP: {
      A: 1.52,
      T: 2.09
    },
    ENTJ: {
      A: 0.96,
      T: 0.69
    },
    ENTP: {
      A: 1.98,
      T: 1.4
    },
    INFJ: {
      A: 1.25,
      T: 3.2
    },
    INFP: {
      A: 2.13,
      T: 5.97
    },
    ENFJ: {
      A: 2.07,
      T: 1.95
    },
    ENFP: {
      A: 4.26,
      T: 4.31
    },
    ISTJ: {
      A: null,
      T: null
    },
    ISFJ: {
      A: null,
      T: null
    },
    ESTJ: {
      A: null,
      T: null
    },
    ESFJ: {
      A: null,
      T: null
    },
    ISTP: {
      A: null,
      T: null
    },
    ISFP: {
      A: null,
      T: null
    },
    ESTP: {
      A: null,
      T: null
    },
    ESFP: {
      A: null,
      T: null
    }
  },
  NE: {
    respondents: 29056,
    INTJ: {
      A: 0.91,
      T: 1.1
    },
    INTP: {
      A: 1.49,
      T: 2.07
    },
    ENTJ: {
      A: 0.86,
      T: 0.65
    },
    ENTP: {
      A: 1.81,
      T: 1.44
    },
    INFJ: {
      A: 1.35,
      T: 3.14
    },
    INFP: {
      A: 2.4,
      T: 6.19
    },
    ENFJ: {
      A: 1.98,
      T: 1.89
    },
    ENFP: {
      A: 4.35,
      T: 4.37
    },
    ISTJ: {
      A: null,
      T: null
    },
    ISFJ: {
      A: null,
      T: null
    },
    ESTJ: {
      A: null,
      T: null
    },
    ESFJ: {
      A: null,
      T: null
    },
    ISTP: {
      A: null,
      T: null
    },
    ISFP: {
      A: null,
      T: null
    },
    ESTP: {
      A: null,
      T: null
    },
    ESFP: {
      A: null,
      T: null
    }
  },
  SD: {
    respondents: 9941,
    INTJ: {
      A: 1.1,
      T: 1.13
    },
    INTP: {
      A: 1.59,
      T: 2.06
    },
    ENTJ: {
      A: 0.97,
      T: 0.58
    },
    ENTP: {
      A: 1.63,
      T: 1.34
    },
    INFJ: {
      A: 1.37,
      T: 3.14
    },
    INFP: {
      A: 2.8,
      T: 6.19
    },
    ENFJ: {
      A: 1.77,
      T: 1.73
    },
    ENFP: {
      A: 4.31,
      T: 4.07
    },
    ISTJ: {
      A: null,
      T: null
    },
    ISFJ: {
      A: null,
      T: null
    },
    ESTJ: {
      A: null,
      T: null
    },
    ESFJ: {
      A: null,
      T: null
    },
    ISTP: {
      A: null,
      T: null
    },
    ISFP: {
      A: null,
      T: null
    },
    ESTP: {
      A: null,
      T: null
    },
    ESFP: {
      A: null,
      T: null
    }
  },
  ND: {
    respondents: 9992,
    INTJ: {
      A: 0.86,
      T: 0.88
    },
    INTP: {
      A: 1.79,
      T: 1.95
    },
    ENTJ: {
      A: 0.87,
      T: 0.44
    },
    ENTP: {
      A: 1.72,
      T: 1.11
    },
    INFJ: {
      A: 1.11,
      T: 2.74
    },
    INFP: {
      A: 2.42,
      T: 6.3
    },
    ENFJ: {
      A: 1.58,
      T: 1.95
    },
    ENFP: {
      A: 4.4,
      T: 3.65
    },
    ISTJ: {
      A: null,
      T: null
    },
    ISFJ: {
      A: null,
      T: null
    },
    ESTJ: {
      A: null,
      T: null
    },
    ESFJ: {
      A: null,
      T: null
    },
    ISTP: {
      A: null,
      T: null
    },
    ISFP: {
      A: null,
      T: null
    },
    ESTP: {
      A: null,
      T: null
    },
    ESFP: {
      A: null,
      T: null
    }
  },
  NM: {
    respondents: 18112,
    INTJ: {
      A: 1.18,
      T: 1.2
    },
    INTP: {
      A: 1.87,
      T: 2.22
    },
    ENTJ: {
      A: 1.07,
      T: 0.73
    },
    ENTP: {
      A: 2.34,
      T: 1.54
    },
    INFJ: {
      A: 1.44,
      T: 3.01
    },
    INFP: {
      A: 2.9,
      T: 6.33
    },
    ENFJ: {
      A: 2.32,
      T: 1.81
    },
    ENFP: {
      A: 4.78,
      T: 3.96
    },
    ISTJ: {
      A: null,
      T: null
    },
    ISFJ: {
      A: null,
      T: null
    },
    ESTJ: {
      A: null,
      T: null
    },
    ESFJ: {
      A: null,
      T: null
    },
    ISTP: {
      A: null,
      T: null
    },
    ISFP: {
      A: null,
      T: null
    },
    ESTP: {
      A: null,
      T: null
    },
    ESFP: {
      A: null,
      T: null
    }
  },
  CO: {
    respondents: 99436,
    INTJ: {
      A: 1.12,
      T: 1.05
    },
    INTP: {
      A: 1.7,
      T: 1.89
    },
    ENTJ: {
      A: 1.01,
      T: 0.6
    },
    ENTP: {
      A: 2.22,
      T: 1.31
    },
    INFJ: {
      A: 1.39,
      T: 2.88
    },
    INFP: {
      A: 2.6,
      T: 5.55
    },
    ENFJ: {
      A: 2.25,
      T: 1.81
    },
    ENFP: {
      A: 5,
      T: 4.16
    },
    ISTJ: {
      A: null,
      T: null
    },
    ISFJ: {
      A: null,
      T: null
    },
    ESTJ: {
      A: null,
      T: null
    },
    ESFJ: {
      A: null,
      T: null
    },
    ISTP: {
      A: null,
      T: null
    },
    ISFP: {
      A: null,
      T: null
    },
    ESTP: {
      A: null,
      T: null
    },
    ESFP: {
      A: null,
      T: null
    }
  },
  UT: {
    respondents: 64761,
    INTJ: {
      A: 0.99,
      T: 0.9
    },
    INTP: {
      A: 1.34,
      T: 1.54
    },
    ENTJ: {
      A: 0.85,
      T: 0.55
    },
    ENTP: {
      A: 1.8,
      T: 1.13
    },
    INFJ: {
      A: 1.62,
      T: 3.25
    },
    INFP: {
      A: 2.71,
      T: 5.57
    },
    ENFJ: {
      A: 2.48,
      T: 2.21
    },
    ENFP: {
      A: 4.87,
      T: 4.72
    },
    ISTJ: {
      A: null,
      T: null
    },
    ISFJ: {
      A: null,
      T: null
    },
    ESTJ: {
      A: null,
      T: null
    },
    ESFJ: {
      A: null,
      T: null
    },
    ISTP: {
      A: null,
      T: null
    },
    ISFP: {
      A: null,
      T: null
    },
    ESTP: {
      A: null,
      T: null
    },
    ESFP: {
      A: null,
      T: null
    }
  },
  AZ: {
    respondents: 87579,
    INTJ: {
      A: 1.06,
      T: 1.18
    },
    INTP: {
      A: 1.82,
      T: 2.25
    },
    ENTJ: {
      A: 1.18,
      T: 0.7
    },
    ENTP: {
      A: 2.22,
      T: 1.45
    },
    INFJ: {
      A: 1.41,
      T: 3.2
    },
    INFP: {
      A: 2.42,
      T: 5.86
    },
    ENFJ: {
      A: 2.43,
      T: 1.95
    },
    ENFP: {
      A: 4.68,
      T: 4.22
    },
    ISTJ: {
      A: null,
      T: null
    },
    ISFJ: {
      A: null,
      T: null
    },
    ESTJ: {
      A: null,
      T: null
    },
    ESFJ: {
      A: null,
      T: null
    },
    ISTP: {
      A: null,
      T: null
    },
    ISFP: {
      A: null,
      T: null
    },
    ESTP: {
      A: null,
      T: null
    },
    ESFP: {
      A: null,
      T: null
    }
  },
  WY: {
    respondents: 8078,
    INTJ: {
      A: 1.11,
      T: 1.34
    },
    INTP: {
      A: 2.04,
      T: 1.96
    },
    ENTJ: {
      A: 0.79,
      T: 0.63
    },
    ENTP: {
      A: 2.03,
      T: 1.23
    },
    INFJ: {
      A: 1.57,
      T: 2.77
    },
    INFP: {
      A: 2.83,
      T: 5.64
    },
    ENFJ: {
      A: 2.08,
      T: 1.65
    },
    ENFP: {
      A: 4.1,
      T: 3.99
    },
    ISTJ: {
      A: null,
      T: null
    },
    ISFJ: {
      A: null,
      T: null
    },
    ESTJ: {
      A: null,
      T: null
    },
    ESFJ: {
      A: null,
      T: null
    },
    ISTP: {
      A: null,
      T: null
    },
    ISFP: {
      A: null,
      T: null
    },
    ESTP: {
      A: null,
      T: null
    },
    ESFP: {
      A: null,
      T: null
    }
  },
  ID: {
    respondents: 28191,
    INTJ: {
      A: 0.95,
      T: 0.96
    },
    INTP: {
      A: 1.7,
      T: 1.62
    },
    ENTJ: {
      A: 0.81,
      T: 0.65
    },
    ENTP: {
      A: 1.67,
      T: 1.11
    },
    INFJ: {
      A: 1.43,
      T: 3.09
    },
    INFP: {
      A: 2.73,
      T: 5.93
    },
    ENFJ: {
      A: 2.1,
      T: 1.71
    },
    ENFP: {
      A: 4.58,
      T: 4.32
    },
    ISTJ: {
      A: null,
      T: null
    },
    ISFJ: {
      A: null,
      T: null
    },
    ESTJ: {
      A: null,
      T: null
    },
    ESFJ: {
      A: null,
      T: null
    },
    ISTP: {
      A: null,
      T: null
    },
    ISFP: {
      A: null,
      T: null
    },
    ESTP: {
      A: null,
      T: null
    },
    ESFP: {
      A: null,
      T: null
    }
  },
  MT: {
    respondents: 14491,
    INTJ: {
      A: 0.97,
      T: 1.15
    },
    INTP: {
      A: 1.69,
      T: 1.97
    },
    ENTJ: {
      A: 0.82,
      T: 0.55
    },
    ENTP: {
      A: 1.85,
      T: 1.13
    },
    INFJ: {
      A: 1.66,
      T: 2.94
    },
    INFP: {
      A: 2.78,
      T: 5.98
    },
    ENFJ: {
      A: 2.1,
      T: 1.37
    },
    ENFP: {
      A: 4.3,
      T: 3.82
    },
    ISTJ: {
      A: null,
      T: null
    },
    ISFJ: {
      A: null,
      T: null
    },
    ESTJ: {
      A: null,
      T: null
    },
    ESFJ: {
      A: null,
      T: null
    },
    ISTP: {
      A: null,
      T: null
    },
    ISFP: {
      A: null,
      T: null
    },
    ESTP: {
      A: null,
      T: null
    },
    ESFP: {
      A: null,
      T: null
    }
  },
  NV: {
    respondents: 34576,
    INTJ: {
      A: 1.1,
      T: 1.42
    },
    INTP: {
      A: 1.78,
      T: 2.42
    },
    ENTJ: {
      A: 1.36,
      T: 0.8
    },
    ENTP: {
      A: 2.27,
      T: 1.6
    },
    INFJ: {
      A: 1.43,
      T: 3.42
    },
    INFP: {
      A: 2.67,
      T: 6.61
    },
    ENFJ: {
      A: 2.4,
      T: 2
    },
    ENFP: {
      A: 4.47,
      T: 4.34
    },
    ISTJ: {
      A: null,
      T: null
    },
    ISFJ: {
      A: null,
      T: null
    },
    ESTJ: {
      A: null,
      T: null
    },
    ESFJ: {
      A: null,
      T: null
    },
    ISTP: {
      A: null,
      T: null
    },
    ISFP: {
      A: null,
      T: null
    },
    ESTP: {
      A: null,
      T: null
    },
    ESFP: {
      A: null,
      T: null
    }
  },
  OR: {
    respondents: 76492,
    INTJ: {
      A: 1.03,
      T: 1
    },
    INTP: {
      A: 1.54,
      T: 2.01
    },
    ENTJ: {
      A: 0.74,
      T: 0.57
    },
    ENTP: {
      A: 1.79,
      T: 1.16
    },
    INFJ: {
      A: 1.43,
      T: 3.17
    },
    INFP: {
      A: 2.67,
      T: 6.3
    },
    ENFJ: {
      A: 2.17,
      T: 1.74
    },
    ENFP: {
      A: 4.34,
      T: 4.16
    },
    ISTJ: {
      A: null,
      T: null
    },
    ISFJ: {
      A: null,
      T: null
    },
    ESTJ: {
      A: null,
      T: null
    },
    ESFJ: {
      A: null,
      T: null
    },
    ISTP: {
      A: null,
      T: null
    },
    ISFP: {
      A: null,
      T: null
    },
    ESTP: {
      A: null,
      T: null
    },
    ESFP: {
      A: null,
      T: null
    }
  },
  WI: {
    respondents: 74026,
    INTJ: {
      A: 1.02,
      T: 1.04
    },
    INTP: {
      A: 1.63,
      T: 2.11
    },
    ENTJ: {
      A: 0.87,
      T: 0.61
    },
    ENTP: {
      A: 1.83,
      T: 1.18
    },
    INFJ: {
      A: 1.17,
      T: 3.2
    },
    INFP: {
      A: 2.33,
      T: 5.96
    },
    ENFJ: {
      A: 1.9,
      T: 1.87
    },
    ENFP: {
      A: 4.18,
      T: 4.19
    },
    ISTJ: {
      A: null,
      T: null
    },
    ISFJ: {
      A: null,
      T: null
    },
    ESTJ: {
      A: null,
      T: null
    },
    ESFJ: {
      A: null,
      T: null
    },
    ISTP: {
      A: null,
      T: null
    },
    ISFP: {
      A: null,
      T: null
    },
    ESTP: {
      A: null,
      T: null
    },
    ESFP: {
      A: null,
      T: null
    }
  },
  WA: {
    respondents: 138968,
    INTJ: {
      A: 1.06,
      T: 1.05
    },
    INTP: {
      A: 1.63,
      T: 2.04
    },
    ENTJ: {
      A: 0.88,
      T: 0.61
    },
    ENTP: {
      A: 1.88,
      T: 1.17
    },
    INFJ: {
      A: 1.38,
      T: 3.04
    },
    INFP: {
      A: 2.66,
      T: 6.02
    },
    ENFJ: {
      A: 1.9,
      T: 1.79
    },
    ENFP: {
      A: 4.49,
      T: 4.18
    },
    ISTJ: {
      A: null,
      T: null
    },
    ISFJ: {
      A: null,
      T: null
    },
    ESTJ: {
      A: null,
      T: null
    },
    ESFJ: {
      A: null,
      T: null
    },
    ISTP: {
      A: null,
      T: null
    },
    ISFP: {
      A: null,
      T: null
    },
    ESTP: {
      A: null,
      T: null
    },
    ESFP: {
      A: null,
      T: null
    }
  },
  CA: {
    respondents: 663022,
    INTJ: {
      A: 1.09,
      T: 1.13
    },
    INTP: {
      A: 1.62,
      T: 2.08
    },
    ENTJ: {
      A: 1.17,
      T: 0.79
    },
    ENTP: {
      A: 2.18,
      T: 1.55
    },
    INFJ: {
      A: 1.37,
      T: 2.99
    },
    INFP: {
      A: 2.43,
      T: 5.65
    },
    ENFJ: {
      A: 2.5,
      T: 2.13
    },
    ENFP: {
      A: 4.8,
      T: 4.55
    },
    ISTJ: {
      A: null,
      T: null
    },
    ISFJ: {
      A: null,
      T: null
    },
    ESTJ: {
      A: null,
      T: null
    },
    ESFJ: {
      A: null,
      T: null
    },
    ISTP: {
      A: null,
      T: null
    },
    ISFP: {
      A: null,
      T: null
    },
    ESTP: {
      A: null,
      T: null
    },
    ESFP: {
      A: null,
      T: null
    }
  },
  MN: {
    respondents: 97434,
    INTJ: {
      A: 0.91,
      T: 0.91
    },
    INTP: {
      A: 1.48,
      T: 1.83
    },
    ENTJ: {
      A: 0.78,
      T: 0.58
    },
    ENTP: {
      A: 1.79,
      T: 1.16
    },
    INFJ: {
      A: 1.29,
      T: 2.84
    },
    INFP: {
      A: 2.4,
      T: 5.56
    },
    ENFJ: {
      A: 1.89,
      T: 1.78
    },
    ENFP: {
      A: 4.49,
      T: 4.24
    },
    ISTJ: {
      A: null,
      T: null
    },
    ISFJ: {
      A: null,
      T: null
    },
    ESTJ: {
      A: null,
      T: null
    },
    ESFJ: {
      A: null,
      T: null
    },
    ISTP: {
      A: null,
      T: null
    },
    ISFP: {
      A: null,
      T: null
    },
    ESTP: {
      A: null,
      T: null
    },
    ESFP: {
      A: null,
      T: null
    }
  },
  IA: {
    respondents: 47449,
    INTJ: {
      A: 0.82,
      T: 1.02
    },
    INTP: {
      A: 1.72,
      T: 2.03
    },
    ENTJ: {
      A: 0.84,
      T: 0.62
    },
    ENTP: {
      A: 1.98,
      T: 1.21
    },
    INFJ: {
      A: 1.17,
      T: 3.06
    },
    INFP: {
      A: 2.21,
      T: 5.68
    },
    ENFJ: {
      A: 1.9,
      T: 1.96
    },
    ENFP: {
      A: 3.99,
      T: 4.13
    },
    ISTJ: {
      A: null,
      T: null
    },
    ISFJ: {
      A: null,
      T: null
    },
    ESTJ: {
      A: null,
      T: null
    },
    ESFJ: {
      A: null,
      T: null
    },
    ISTP: {
      A: null,
      T: null
    },
    ISFP: {
      A: null,
      T: null
    },
    ESTP: {
      A: null,
      T: null
    },
    ESFP: {
      A: null,
      T: null
    }
  },
  MO: {
    respondents: 83641,
    INTJ: {
      A: 1.11,
      T: 1.15
    },
    INTP: {
      A: 1.6,
      T: 2.19
    },
    ENTJ: {
      A: 0.97,
      T: 0.77
    },
    ENTP: {
      A: 2.06,
      T: 1.3
    },
    INFJ: {
      A: 1.3,
      T: 3.33
    },
    INFP: {
      A: 2.34,
      T: 5.89
    },
    ENFJ: {
      A: 2.06,
      T: 1.96
    },
    ENFP: {
      A: 4.26,
      T: 4.37
    },
    ISTJ: {
      A: null,
      T: null
    },
    ISFJ: {
      A: null,
      T: null
    },
    ESTJ: {
      A: null,
      T: null
    },
    ESFJ: {
      A: null,
      T: null
    },
    ISTP: {
      A: null,
      T: null
    },
    ISFP: {
      A: null,
      T: null
    },
    ESTP: {
      A: null,
      T: null
    },
    ESFP: {
      A: null,
      T: null
    }
  },
  AR: {
    respondents: 35509,
    INTJ: {
      A: 1.11,
      T: 1.15
    },
    INTP: {
      A: 1.57,
      T: 2.19
    },
    ENTJ: {
      A: 1.03,
      T: 0.85
    },
    ENTP: {
      A: 1.99,
      T: 1.43
    },
    INFJ: {
      A: 1.42,
      T: 3.22
    },
    INFP: {
      A: 2.42,
      T: 5.93
    },
    ENFJ: {
      A: 2.02,
      T: 2.02
    },
    ENFP: {
      A: 3.93,
      T: 4.18
    },
    ISTJ: {
      A: null,
      T: null
    },
    ISFJ: {
      A: null,
      T: null
    },
    ESTJ: {
      A: null,
      T: null
    },
    ESFJ: {
      A: null,
      T: null
    },
    ISTP: {
      A: null,
      T: null
    },
    ISFP: {
      A: null,
      T: null
    },
    ESTP: {
      A: null,
      T: null
    },
    ESFP: {
      A: null,
      T: null
    }
  },
  LA: {
    respondents: 44618,
    INTJ: {
      A: 1.04,
      T: 1.23
    },
    INTP: {
      A: 1.58,
      T: 2.38
    },
    ENTJ: {
      A: 1.17,
      T: 0.86
    },
    ENTP: {
      A: 2.28,
      T: 1.53
    },
    INFJ: {
      A: 1.39,
      T: 3.36
    },
    INFP: {
      A: 2.42,
      T: 6.35
    },
    ENFJ: {
      A: 2.19,
      T: 2.06
    },
    ENFP: {
      A: 4.24,
      T: 4.46
    },
    ISTJ: {
      A: null,
      T: null
    },
    ISFJ: {
      A: null,
      T: null
    },
    ESTJ: {
      A: null,
      T: null
    },
    ESFJ: {
      A: null,
      T: null
    },
    ISTP: {
      A: null,
      T: null
    },
    ISFP: {
      A: null,
      T: null
    },
    ESTP: {
      A: null,
      T: null
    },
    ESFP: {
      A: null,
      T: null
    }
  },
  MI: {
    respondents: 117290,
    INTJ: {
      A: 1.01,
      T: 1.26
    },
    INTP: {
      A: 1.64,
      T: 2.24
    },
    ENTJ: {
      A: 0.97,
      T: 0.68
    },
    ENTP: {
      A: 1.96,
      T: 1.42
    },
    INFJ: {
      A: 1.29,
      T: 3.29
    },
    INFP: {
      A: 2.34,
      T: 6.39
    },
    ENFJ: {
      A: 2.06,
      T: 2.07
    },
    ENFP: {
      A: 4.38,
      T: 4.49
    },
    ISTJ: {
      A: null,
      T: null
    },
    ISFJ: {
      A: null,
      T: null
    },
    ESTJ: {
      A: null,
      T: null
    },
    ESFJ: {
      A: null,
      T: null
    },
    ISTP: {
      A: null,
      T: null
    },
    ISFP: {
      A: null,
      T: null
    },
    ESTP: {
      A: null,
      T: null
    },
    ESFP: {
      A: null,
      T: null
    }
  },
  IL: {
    respondents: 167880,
    INTJ: {
      A: 0.94,
      T: 1.07
    },
    INTP: {
      A: 1.66,
      T: 2.1
    },
    ENTJ: {
      A: 1.03,
      T: 0.74
    },
    ENTP: {
      A: 2.14,
      T: 1.48
    },
    INFJ: {
      A: 1.28,
      T: 3.11
    },
    INFP: {
      A: 2.23,
      T: 5.79
    },
    ENFJ: {
      A: 2.2,
      T: 2.08
    },
    ENFP: {
      A: 4.47,
      T: 4.61
    },
    ISTJ: {
      A: null,
      T: null
    },
    ISFJ: {
      A: null,
      T: null
    },
    ESTJ: {
      A: null,
      T: null
    },
    ESFJ: {
      A: null,
      T: null
    },
    ISTP: {
      A: null,
      T: null
    },
    ISFP: {
      A: null,
      T: null
    },
    ESTP: {
      A: null,
      T: null
    },
    ESFP: {
      A: null,
      T: null
    }
  },

  IN: {
    respondents: 75226,
    INTJ: {
      A: 0.95,
      T: 1.04
    },
    INTP: {
      A: 1.46,
      T: 2.12
    },
    ENTJ: {
      A: 0.95,
      T: 0.7
    },
    ENTP: {
      A: 1.9,
      T: 1.34
    },
    INFJ: {
      A: 1.24,
      T: 3.19
    },
    INFP: {
      A: 2.22,
      T: 6.02
    },
    ENFJ: {
      A: 2.04,
      T: 2.09
    },
    ENFP: {
      A: 4.01,
      T: 4.34
    },
    ISTJ: {
      A: null,
      T: null
    },
    ISFJ: {
      A: null,
      T: null
    },
    ESTJ: {
      A: null,
      T: null
    },
    ESFJ: {
      A: null,
      T: null
    },
    ISTP: {
      A: null,
      T: null
    },
    ISFP: {
      A: null,
      T: null
    },
    ESTP: {
      A: null,
      T: null
    },
    ESFP: {
      A: null,
      T: null
    }
  },
  OH: {
    respondents: 136208,
    INTJ: {
      A: 1,
      T: 1.19
    },
    INTP: {
      A: 1.62,
      T: 2.21
    },
    ENTJ: {
      A: 0.93,
      T: 0.75
    },
    ENTP: {
      A: 1.95,
      T: 1.34
    },
    INFJ: {
      A: 1.3,
      T: 3.38
    },
    INFP: {
      A: 2.32,
      T: 6.36
    },
    ENFJ: {
      A: 1.95,
      T: 2.08
    },
    ENFP: {
      A: 4.16,
      T: 4.36
    },
    ISTJ: {
      A: null,
      T: null
    },
    ISFJ: {
      A: null,
      T: null
    },
    ESTJ: {
      A: null,
      T: null
    },
    ESFJ: {
      A: null,
      T: null
    },
    ISTP: {
      A: null,
      T: null
    },
    ISFP: {
      A: null,
      T: null
    },
    ESTP: {
      A: null,
      T: null
    },
    ESFP: {
      A: null,
      T: null
    }
  },
  KY: {
    respondents: 49336,
    INTJ: {
      A: 1.05,
      T: 1.36
    },
    INTP: {
      A: 1.57,
      T: 2.49
    },
    ENTJ: {
      A: 0.9,
      T: 0.72
    },
    ENTP: {
      A: 2.05,
      T: 1.42
    },
    INFJ: {
      A: 1.28,
      T: 3.5
    },
    INFP: {
      A: 2.31,
      T: 6.74
    },
    ENFJ: {
      A: 1.82,
      T: 2.08
    },
    ENFP: {
      A: 3.98,
      T: 4.19
    },
    ISTJ: {
      A: null,
      T: null
    },
    ISFJ: {
      A: null,
      T: null
    },
    ESTJ: {
      A: null,
      T: null
    },
    ESFJ: {
      A: null,
      T: null
    },
    ISTP: {
      A: null,
      T: null
    },
    ISFP: {
      A: null,
      T: null
    },
    ESTP: {
      A: null,
      T: null
    },
    ESFP: {
      A: null,
      T: null
    }
  },
  TN: {
    respondents: 84850,
    INTJ: {
      A: 1.05,
      T: 1.16
    },
    INTP: {
      A: 1.53,
      T: 2.04
    },
    ENTJ: {
      A: 0.99,
      T: 0.78
    },
    ENTP: {
      A: 2.15,
      T: 1.36
    },
    INFJ: {
      A: 1.28,
      T: 3.22
    },
    INFP: {
      A: 2.26,
      T: 5.82
    },
    ENFJ: {
      A: 2.17,
      T: 1.95
    },
    ENFP: {
      A: 4.15,
      T: 4.13
    },
    ISTJ: {
      A: null,
      T: null
    },
    ISFJ: {
      A: null,
      T: null
    },
    ESTJ: {
      A: null,
      T: null
    },
    ESFJ: {
      A: null,
      T: null
    },
    ISTP: {
      A: null,
      T: null
    },
    ISFP: {
      A: null,
      T: null
    },
    ESTP: {
      A: null,
      T: null
    },
    ESFP: {
      A: null,
      T: null
    }
  },
  MS: {
    respondents: 27098,
    INTJ: {
      A: 1.08,
      T: 1.07
    },
    INTP: {
      A: 1.39,
      T: 1.86
    },
    ENTJ: {
      A: 1.31,
      T: 0.97
    },
    ENTP: {
      A: 2.21,
      T: 1.61
    },
    INFJ: {
      A: 1.24,
      T: 3.3
    },
    INFP: {
      A: 2.23,
      T: 5.38
    },
    ENFJ: {
      A: 2.52,
      T: 2.35
    },
    ENFP: {
      A: 4.19,
      T: 4.17
    },
    ISTJ: {
      A: null,
      T: null
    },
    ISFJ: {
      A: null,
      T: null
    },
    ESTJ: {
      A: null,
      T: null
    },
    ESFJ: {
      A: null,
      T: null
    },
    ISTP: {
      A: null,
      T: null
    },
    ISFP: {
      A: null,
      T: null
    },
    ESTP: {
      A: null,
      T: null
    },
    ESFP: {
      A: null,
      T: null
    }
  },
  AL: {
    respondents: 54745,
    INTJ: {
      A: 1.05,
      T: 1.2
    },
    INTP: {
      A: 1.62,
      T: 2.12
    },
    ENTJ: {
      A: 0.99,
      T: 0.79
    },
    ENTP: {
      A: 2.02,
      T: 1.39
    },
    INFJ: {
      A: 1.35,
      T: 3.15
    },
    INFP: {
      A: 2.28,
      T: 5.67
    },
    ENFJ: {
      A: 2.12,
      T: 2.14
    },
    ENFP: {
      A: 4.04,
      T: 4.08
    },
    ISTJ: {
      A: null,
      T: null
    },
    ISFJ: {
      A: null,
      T: null
    },
    ESTJ: {
      A: null,
      T: null
    },
    ESFJ: {
      A: null,
      T: null
    },
    ISTP: {
      A: null,
      T: null
    },
    ISFP: {
      A: null,
      T: null
    },
    ESTP: {
      A: null,
      T: null
    },
    ESFP: {
      A: null,
      T: null
    }
  },
  FL: {
    respondents: 233398,
    INTJ: {
      A: 1.12,
      T: 1.28
    },
    INTP: {
      A: 1.71,
      T: 2.26
    },
    ENTJ: {
      A: 1.31,
      T: 0.85
    },
    ENTP: {
      A: 2.34,
      T: 1.56
    },
    INFJ: {
      A: 1.43,
      T: 3.3
    },
    INFP: {
      A: 2.48,
      T: 6
    },
    ENFJ: {
      A: 2.6,
      T: 2.1
    },
    ENFP: {
      A: 4.66,
      T: 4.31
    },
    ISTJ: {
      A: null,
      T: null
    },
    ISFJ: {
      A: null,
      T: null
    },
    ESTJ: {
      A: null,
      T: null
    },
    ESFJ: {
      A: null,
      T: null
    },
    ISTP: {
      A: null,
      T: null
    },
    ISFP: {
      A: null,
      T: null
    },
    ESTP: {
      A: null,
      T: null
    },
    ESFP: {
      A: null,
      T: null
    }
  },
  GA: {
    respondents: 128973,
    INTJ: {
      A: 1.14,
      T: 1.15
    },
    INTP: {
      A: 1.67,
      T: 2.22
    },
    ENTJ: {
      A: 1.2,
      T: 0.77
    },
    ENTP: {
      A: 2.14,
      T: 1.42
    },
    INFJ: {
      A: 1.36,
      T: 3.22
    },
    INFP: {
      A: 2.38,
      T: 5.76
    },
    ENFJ: {
      A: 2.4,
      T: 2.01
    },
    ENFP: {
      A: 4.41,
      T: 4.29
    },
    ISTJ: {
      A: null,
      T: null
    },
    ISFJ: {
      A: null,
      T: null
    },
    ESTJ: {
      A: null,
      T: null
    },
    ESFJ: {
      A: null,
      T: null
    },
    ISTP: {
      A: null,
      T: null
    },
    ISFP: {
      A: null,
      T: null
    },
    ESTP: {
      A: null,
      T: null
    },
    ESFP: {
      A: null,
      T: null
    }
  },
  SC: {
    respondents: 50762,
    INTJ: {
      A: 1.01,
      T: 1.1
    },
    INTP: {
      A: 1.53,
      T: 2.05
    },
    ENTJ: {
      A: 1.12,
      T: 0.76
    },
    ENTP: {
      A: 2.04,
      T: 1.44
    },
    INFJ: {
      A: 1.26,
      T: 3.18
    },
    INFP: {
      A: 2.2,
      T: 5.77
    },
    ENFJ: {
      A: 2.02,
      T: 2.15
    },
    ENFP: {
      A: 4.26,
      T: 4.16
    },
    ISTJ: {
      A: null,
      T: null
    },
    ISFJ: {
      A: null,
      T: null
    },
    ESTJ: {
      A: null,
      T: null
    },
    ESFJ: {
      A: null,
      T: null
    },
    ISTP: {
      A: null,
      T: null
    },
    ISFP: {
      A: null,
      T: null
    },
    ESTP: {
      A: null,
      T: null
    },
    ESFP: {
      A: null,
      T: null
    }
  },
  NC: {
    respondents: 132757,
    INTJ: {
      A: 1.08,
      T: 1.17
    },
    INTP: {
      A: 1.63,
      T: 2.15
    },
    ENTJ: {
      A: 1.01,
      T: 0.71
    },
    ENTP: {
      A: 2.13,
      T: 1.36
    },
    INFJ: {
      A: 1.36,
      T: 3.22
    },
    INFP: {
      A: 2.35,
      T: 6.03
    },
    ENFJ: {
      A: 2.05,
      T: 1.94
    },
    ENFP: {
      A: 4.29,
      T: 4.35
    },
    ISTJ: {
      A: null,
      T: null
    },
    ISFJ: {
      A: null,
      T: null
    },
    ESTJ: {
      A: null,
      T: null
    },
    ESFJ: {
      A: null,
      T: null
    },
    ISTP: {
      A: null,
      T: null
    },
    ISFP: {
      A: null,
      T: null
    },
    ESTP: {
      A: null,
      T: null
    },
    ESFP: {
      A: null,
      T: null
    }
  },
  VA: {
    respondents: 131327,
    INTJ: {
      A: 1.08,
      T: 1.12
    },
    INTP: {
      A: 1.64,
      T: 2.04
    },
    ENTJ: {
      A: 1.05,
      T: 0.68
    },
    ENTP: {
      A: 1.95,
      T: 1.31
    },
    INFJ: {
      A: 1.29,
      T: 3.14
    },
    INFP: {
      A: 2.26,
      T: 5.76
    },
    ENFJ: {
      A: 1.97,
      T: 1.86
    },
    ENFP: {
      A: 4.17,
      T: 4.27
    },
    ISTJ: {
      A: null,
      T: null
    },
    ISFJ: {
      A: null,
      T: null
    },
    ESTJ: {
      A: null,
      T: null
    },
    ESFJ: {
      A: null,
      T: null
    },
    ISTP: {
      A: null,
      T: null
    },
    ISFP: {
      A: null,
      T: null
    },
    ESTP: {
      A: null,
      T: null
    },
    ESFP: {
      A: null,
      T: null
    }
  },
  WV: {
    respondents: 15385,
    INTJ: {
      A: 1,
      T: 1.55
    },
    INTP: {
      A: 2.08,
      T: 2.86
    },
    ENTJ: {
      A: 0.92,
      T: 0.79
    },
    ENTP: {
      A: 1.94,
      T: 1.61
    },
    INFJ: {
      A: 1.3,
      T: 4.06
    },
    INFP: {
      A: 2.17,
      T: 7.74
    },
    ENFJ: {
      A: 1.66,
      T: 1.83
    },
    ENFP: {
      A: 3.83,
      T: 4.35
    },
    ISTJ: {
      A: null,
      T: null
    },
    ISFJ: {
      A: null,
      T: null
    },
    ESTJ: {
      A: null,
      T: null
    },
    ESFJ: {
      A: null,
      T: null
    },
    ISTP: {
      A: null,
      T: null
    },
    ISFP: {
      A: null,
      T: null
    },
    ESTP: {
      A: null,
      T: null
    },
    ESFP: {
      A: null,
      T: null
    }
  },
  MD: {
    respondents: 89425,
    INTJ: {
      A: 1.04,
      T: 1.11
    },
    INTP: {
      A: 1.63,
      T: 2.21
    },
    ENTJ: {
      A: 1.03,
      T: 0.69
    },
    ENTP: {
      A: 2.2,
      T: 1.47
    },
    INFJ: {
      A: 1.3,
      T: 3.02
    },
    INFP: {
      A: 2.28,
      T: 5.95
    },
    ENFJ: {
      A: 2.2,
      T: 1.98
    },
    ENFP: {
      A: 4.5,
      T: 4.51
    },
    ISTJ: {
      A: null,
      T: null
    },
    ISFJ: {
      A: null,
      T: null
    },
    ESTJ: {
      A: null,
      T: null
    },
    ESFJ: {
      A: null,
      T: null
    },
    ISTP: {
      A: null,
      T: null
    },
    ISFP: {
      A: null,
      T: null
    },
    ESTP: {
      A: null,
      T: null
    },
    ESFP: {
      A: null,
      T: null
    }
  },
  NJ: {
    respondents: 94687,
    INTJ: {
      A: 1.03,
      T: 1.26
    },
    INTP: {
      A: 1.54,
      T: 2.41
    },
    ENTJ: {
      A: 1.07,
      T: 0.84
    },
    ENTP: {
      A: 2.2,
      T: 1.71
    },
    INFJ: {
      A: 1.27,
      T: 3.35
    },
    INFP: {
      A: 2.23,
      T: 6.46
    },
    ENFJ: {
      A: 2.19,
      T: 2.23
    },
    ENFP: {
      A: 4.36,
      T: 4.78
    },
    ISTJ: {
      A: null,
      T: null
    },
    ISFJ: {
      A: null,
      T: null
    },
    ESTJ: {
      A: null,
      T: null
    },
    ESFJ: {
      A: null,
      T: null
    },
    ISTP: {
      A: null,
      T: null
    },
    ISFP: {
      A: null,
      T: null
    },
    ESTP: {
      A: null,
      T: null
    },
    ESFP: {
      A: null,
      T: null
    }
  },
  PA: {
    respondents: 141502,
    INTJ: {
      A: 1,
      T: 1.2
    },
    INTP: {
      A: 1.69,
      T: 2.33
    },
    ENTJ: {
      A: 0.92,
      T: 0.75
    },
    ENTP: {
      A: 1.97,
      T: 1.46
    },
    INFJ: {
      A: 1.3,
      T: 3.24
    },
    INFP: {
      A: 2.36,
      T: 6.46
    },
    ENFJ: {
      A: 2.03,
      T: 2.09
    },
    ENFP: {
      A: 4.23,
      T: 4.58
    },
    ISTJ: {
      A: null,
      T: null
    },
    ISFJ: {
      A: null,
      T: null
    },
    ESTJ: {
      A: null,
      T: null
    },
    ESFJ: {
      A: null,
      T: null
    },
    ISTP: {
      A: null,
      T: null
    },
    ISFP: {
      A: null,
      T: null
    },
    ESTP: {
      A: null,
      T: null
    },
    ESFP: {
      A: null,
      T: null
    }
  },
  NY: {
    respondents: 252852,
    INTJ: {
      A: 1.03,
      T: 1.14
    },
    INTP: {
      A: 1.54,
      T: 2.25
    },
    ENTJ: {
      A: 1.17,
      T: 0.84
    },
    ENTP: {
      A: 2.2,
      T: 1.72
    },
    INFJ: {
      A: 1.29,
      T: 3.14
    },
    INFP: {
      A: 2.26,
      T: 5.97
    },
    ENFJ: {
      A: 2.32,
      T: 2.24
    },
    ENFP: {
      A: 4.56,
      T: 4.8
    },
    ISTJ: {
      A: null,
      T: null
    },
    ISFJ: {
      A: null,
      T: null
    },
    ESTJ: {
      A: null,
      T: null
    },
    ESFJ: {
      A: null,
      T: null
    },
    ISTP: {
      A: null,
      T: null
    },
    ISFP: {
      A: null,
      T: null
    },
    ESTP: {
      A: null,
      T: null
    },
    ESFP: {
      A: null,
      T: null
    }
  },
  CT: {
    respondents: 44348,
    INTJ: {
      A: 1,
      T: 1.13
    },
    INTP: {
      A: 1.65,
      T: 2.43
    },
    ENTJ: {
      A: 1,
      T: 0.77
    },
    ENTP: {
      A: 1.93,
      T: 1.67
    },
    INFJ: {
      A: 1.25,
      T: 3.38
    },
    INFP: {
      A: 2.22,
      T: 6.35
    },
    ENFJ: {
      A: 2.16,
      T: 2.14
    },
    ENFP: {
      A: 4.2,
      T: 4.67
    },
    ISTJ: {
      A: null,
      T: null
    },
    ISFJ: {
      A: null,
      T: null
    },
    ESTJ: {
      A: null,
      T: null
    },
    ESFJ: {
      A: null,
      T: null
    },
    ISTP: {
      A: null,
      T: null
    },
    ISFP: {
      A: null,
      T: null
    },
    ESTP: {
      A: null,
      T: null
    },
    ESFP: {
      A: null,
      T: null
    }
  },
  RI: {
    respondents: 12379,
    INTJ: {
      A: 1.03,
      T: 1.21
    },
    INTP: {
      A: 1.49,
      T: 2.46
    },
    ENTJ: {
      A: 1.1,
      T: 0.67
    },
    ENTP: {
      A: 1.92,
      T: 1.68
    },
    INFJ: {
      A: 1.38,
      T: 3.62
    },
    INFP: {
      A: 2.59,
      T: 7.08
    },
    ENFJ: {
      A: 2,
      T: 2.08
    },
    ENFP: {
      A: 4.6,
      T: 4.76
    },
    ISTJ: {
      A: null,
      T: null
    },
    ISFJ: {
      A: null,
      T: null
    },
    ESTJ: {
      A: null,
      T: null
    },
    ESFJ: {
      A: null,
      T: null
    },
    ISTP: {
      A: null,
      T: null
    },
    ISFP: {
      A: null,
      T: null
    },
    ESTP: {
      A: null,
      T: null
    },
    ESFP: {
      A: null,
      T: null
    }
  },
  MA: {
    respondents: 101081,
    INTJ: {
      A: 0.86,
      T: 1.08
    },
    INTP: {
      A: 1.45,
      T: 2.1
    },
    ENTJ: {
      A: 0.94,
      T: 0.67
    },
    ENTP: {
      A: 1.97,
      T: 1.43
    },
    INFJ: {
      A: 1.18,
      T: 3.11
    },
    INFP: {
      A: 2.3,
      T: 6.17
    },
    ENFJ: {
      A: 1.95,
      T: 2.04
    },
    ENFP: {
      A: 4.41,
      T: 4.77
    },
    ISTJ: {
      A: null,
      T: null
    },
    ISFJ: {
      A: null,
      T: null
    },
    ESTJ: {
      A: null,
      T: null
    },
    ESFJ: {
      A: null,
      T: null
    },
    ISTP: {
      A: null,
      T: null
    },
    ISFP: {
      A: null,
      T: null
    },
    ESTP: {
      A: null,
      T: null
    },
    ESFP: {
      A: null,
      T: null
    }
  },
  VT: {
    respondents: 9533,
    INTJ: {
      A: 0.97,
      T: 0.81
    },
    INTP: {
      A: 1.68,
      T: 2.04
    },
    ENTJ: {
      A: 0.95,
      T: 0.71
    },
    ENTP: {
      A: 1.93,
      T: 1.15
    },
    INFJ: {
      A: 1.46,
      T: 3.23
    },
    INFP: {
      A: 2.82,
      T: 6.78
    },
    ENFJ: {
      A: 2.09,
      T: 1.74
    },
    ENFP: {
      A: 4.56,
      T: 4.32
    },
    ISTJ: {
      A: null,
      T: null
    },
    ISFJ: {
      A: null,
      T: null
    },
    ESTJ: {
      A: null,
      T: null
    },
    ESFJ: {
      A: null,
      T: null
    },
    ISTP: {
      A: null,
      T: null
    },
    ISFP: {
      A: null,
      T: null
    },
    ESTP: {
      A: null,
      T: null
    },
    ESFP: {
      A: null,
      T: null
    }
  },
  NH: {
    respondents: 18247,
    INTJ: {
      A: 0.97,
      T: 1.06
    },
    INTP: {
      A: 1.61,
      T: 2.43
    },
    ENTJ: {
      A: 0.81,
      T: 0.62
    },
    ENTP: {
      A: 1.82,
      T: 1.17
    },
    INFJ: {
      A: 1.24,
      T: 3.39
    },
    INFP: {
      A: 2.64,
      T: 6.73
    },
    ENFJ: {
      A: 1.78,
      T: 1.91
    },
    ENFP: {
      A: 4.3,
      T: 4.57
    },
    ISTJ: {
      A: null,
      T: null
    },
    ISFJ: {
      A: null,
      T: null
    },
    ESTJ: {
      A: null,
      T: null
    },
    ESFJ: {
      A: null,
      T: null
    },
    ISTP: {
      A: null,
      T: null
    },
    ISFP: {
      A: null,
      T: null
    },
    ESTP: {
      A: null,
      T: null
    },
    ESFP: {
      A: null,
      T: null
    }
  },
  ME: {
    respondents: 19257,
    INTJ: {
      A: 1.02,
      T: 1.2
    },
    INTP: {
      A: 1.55,
      T: 2.26
    },
    ENTJ: {
      A: 0.71,
      T: 0.6
    },
    ENTP: {
      A: 1.77,
      T: 1.26
    },
    INFJ: {
      A: 1.39,
      T: 3.4
    },
    INFP: {
      A: 2.66,
      T: 7.49
    },
    ENFJ: {
      A: 1.82,
      T: 1.87
    },
    ENFP: {
      A: 3.85,
      T: 4.21
    },
    ISTJ: {
      A: null,
      T: null
    },
    ISFJ: {
      A: null,
      T: null
    },
    ESTJ: {
      A: null,
      T: null
    },
    ESFJ: {
      A: null,
      T: null
    },
    ISTP: {
      A: null,
      T: null
    },
    ISFP: {
      A: null,
      T: null
    },
    ESTP: {
      A: null,
      T: null
    },
    ESFP: {
      A: null,
      T: null
    }
  },
  AK: {
    respondents: 11640,
    INTJ: {
      A: 1.22,
      T: 1.26
    },
    INTP: {
      A: 1.98,
      T: 2.25
    },
    ENTJ: {
      A: 0.87,
      T: 0.49
    },
    ENTP: {
      A: 2.09,
      T: 1.06
    },
    INFJ: {
      A: 1.47,
      T: 3.08
    },
    INFP: {
      A: 2.65,
      T: 6.31
    },
    ENFJ: {
      A: 1.86,
      T: 1.42
    },
    ENFP: {
      A: 4.5,
      T: 3.69
    },
    ISTJ: {
      A: null,
      T: null
    },
    ISFJ: {
      A: null,
      T: null
    },
    ESTJ: {
      A: null,
      T: null
    },
    ESFJ: {
      A: null,
      T: null
    },
    ISTP: {
      A: null,
      T: null
    },
    ISFP: {
      A: null,
      T: null
    },
    ESTP: {
      A: null,
      T: null
    },
    ESFP: {
      A: null,
      T: null
    }
  },
  HI: {
    respondents: 21482,
    INTJ: {
      A: 0.91,
      T: 0.93
    },
    INTP: {
      A: 1.62,
      T: 1.74
    },
    ENTJ: {
      A: 0.79,
      T: 0.6
    },
    ENTP: {
      A: 1.66,
      T: 1.16
    },
    INFJ: {
      A: 1.21,
      T: 2.99
    },
    INFP: {
      A: 2.54,
      T: 5.84
    },
    ENFJ: {
      A: 2.46,
      T: 2.01
    },
    ENFP: {
      A: 5.29,
      T: 4.32
    },
    ISTJ: {
      A: null,
      T: null
    },
    ISFJ: {
      A: null,
      T: null
    },
    ESTJ: {
      A: null,
      T: null
    },
    ESFJ: {
      A: null,
      T: null
    },
    ISTP: {
      A: null,
      T: null
    },
    ISFP: {
      A: null,
      T: null
    },
    ESTP: {
      A: null,
      T: null
    },
    ESFP: {
      A: null,
      T: null
    }
  },
  DE: {
    respondents: 9952,
    INTJ: {
      A: 1.07,
      T: 1.17,
    },
    INTP: {
      A: 1.88,
      T: 2.54
    },
    ENTJ: {
      A: 1.12,
      T: 0.62
    },
    ENTP: {
      A: 2.36,
      T: 1.44
    },
    INFJ: {
      A: 1.17,
      T: 3.49
    },
    INFP: {
      A: 2.38,
      T: 6.32
    },
    ENFJ: {
      A: 1.94,
      T: 1.74
    },
    ENFP: {
      A: 4.13,
      T: 4.38
    },
    ISTJ: {
      A: null,
      T: null
    },
    ISFJ: {
      A: null,
      T: null
    },
    ESTJ: {
      A: null,
      T: null
    },
    ESFJ: {
      A: null,
      T: null
    },
    ISTP: {
      A: null,
      T: null
    },
    ISFP: {
      A: null,
      T: null
    },
    ESTP: {
      A: null,
      T: null
    },
    ESFP: {
      A: null,
      T: null
    }
  }
}