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
      A: null,
      T: null
    },
    INFJ: {
      A: null,
      T: null
    },
    INFP: {
      A: null,
      T: null
    },
    ENFJ: {
      A: null,
      T: null
    },
    ENFP: {
      A: null,
      T: null
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
      A: null,
      T: null
    },
    INFJ: {
      A: null,
      T: null
    },
    INFP: {
      A: null,
      T: null
    },
    ENFJ: {
      A: null,
      T: null
    },
    ENFP: {
      A: null,
      T: null
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
      A: null,
      T: null
    },
    INFJ: {
      A: null,
      T: null
    },
    INFP: {
      A: null,
      T: null
    },
    ENFJ: {
      A: null,
      T: null
    },
    ENFP: {
      A: null,
      T: null
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
      A: null,
      T: null
    },
    INFJ: {
      A: null,
      T: null
    },
    INFP: {
      A: null,
      T: null
    },
    ENFJ: {
      A: null,
      T: null
    },
    ENFP: {
      A: null,
      T: null
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
      A: null,
      T: null
    },
    INFJ: {
      A: null,
      T: null
    },
    INFP: {
      A: null,
      T: null
    },
    ENFJ: {
      A: null,
      T: null
    },
    ENFP: {
      A: null,
      T: null
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
      A: null,
      T: null
    },
    INFJ: {
      A: null,
      T: null
    },
    INFP: {
      A: null,
      T: null
    },
    ENFJ: {
      A: null,
      T: null
    },
    ENFP: {
      A: null,
      T: null
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
      A: null,
      T: null
    },
    INFJ: {
      A: null,
      T: null
    },
    INFP: {
      A: null,
      T: null
    },
    ENFJ: {
      A: null,
      T: null
    },
    ENFP: {
      A: null,
      T: null
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
      A: null,
      T: null
    },
    INFJ: {
      A: null,
      T: null
    },
    INFP: {
      A: null,
      T: null
    },
    ENFJ: {
      A: null,
      T: null
    },
    ENFP: {
      A: null,
      T: null
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
      A: null,
      T: null
    },
    INFJ: {
      A: null,
      T: null
    },
    INFP: {
      A: null,
      T: null
    },
    ENFJ: {
      A: null,
      T: null
    },
    ENFP: {
      A: null,
      T: null
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
      A: null,
      T: null
    },
    INFJ: {
      A: null,
      T: null
    },
    INFP: {
      A: null,
      T: null
    },
    ENFJ: {
      A: null,
      T: null
    },
    ENFP: {
      A: null,
      T: null
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
      A: null,
      T: null
    },
    INFJ: {
      A: null,
      T: null
    },
    INFP: {
      A: null,
      T: null
    },
    ENFJ: {
      A: null,
      T: null
    },
    ENFP: {
      A: null,
      T: null
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
      A: null,
      T: null
    },
    INFJ: {
      A: null,
      T: null
    },
    INFP: {
      A: null,
      T: null
    },
    ENFJ: {
      A: null,
      T: null
    },
    ENFP: {
      A: null,
      T: null
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
      A: null,
      T: null
    },
    INFJ: {
      A: null,
      T: null
    },
    INFP: {
      A: null,
      T: null
    },
    ENFJ: {
      A: null,
      T: null
    },
    ENFP: {
      A: null,
      T: null
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
      A: null,
      T: null
    },
    INFJ: {
      A: null,
      T: null
    },
    INFP: {
      A: null,
      T: null
    },
    ENFJ: {
      A: null,
      T: null
    },
    ENFP: {
      A: null,
      T: null
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
      A: null,
      T: null
    },
    INFJ: {
      A: null,
      T: null
    },
    INFP: {
      A: null,
      T: null
    },
    ENFJ: {
      A: null,
      T: null
    },
    ENFP: {
      A: null,
      T: null
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
      A: null,
      T: null
    },
    INFJ: {
      A: null,
      T: null
    },
    INFP: {
      A: null,
      T: null
    },
    ENFJ: {
      A: null,
      T: null
    },
    ENFP: {
      A: null,
      T: null
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
      A: null,
      T: null
    },
    INFJ: {
      A: null,
      T: null
    },
    INFP: {
      A: null,
      T: null
    },
    ENFJ: {
      A: null,
      T: null
    },
    ENFP: {
      A: null,
      T: null
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
      A: null,
      T: null
    },
    INFJ: {
      A: null,
      T: null
    },
    INFP: {
      A: null,
      T: null
    },
    ENFJ: {
      A: null,
      T: null
    },
    ENFP: {
      A: null,
      T: null
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
      A: null,
      T: null
    },
    INFJ: {
      A: null,
      T: null
    },
    INFP: {
      A: null,
      T: null
    },
    ENFJ: {
      A: null,
      T: null
    },
    ENFP: {
      A: null,
      T: null
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
      A: null,
      T: null
    },
    INFJ: {
      A: null,
      T: null
    },
    INFP: {
      A: null,
      T: null
    },
    ENFJ: {
      A: null,
      T: null
    },
    ENFP: {
      A: null,
      T: null
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
      A: null,
      T: null
    },
    INFJ: {
      A: null,
      T: null
    },
    INFP: {
      A: null,
      T: null
    },
    ENFJ: {
      A: null,
      T: null
    },
    ENFP: {
      A: null,
      T: null
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
      A: null,
      T: null
    },
    INFJ: {
      A: null,
      T: null
    },
    INFP: {
      A: null,
      T: null
    },
    ENFJ: {
      A: null,
      T: null
    },
    ENFP: {
      A: null,
      T: null
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
      A: null,
      T: null
    },
    INFJ: {
      A: null,
      T: null
    },
    INFP: {
      A: null,
      T: null
    },
    ENFJ: {
      A: null,
      T: null
    },
    ENFP: {
      A: null,
      T: null
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
      A: null,
      T: null
    },
    INFJ: {
      A: null,
      T: null
    },
    INFP: {
      A: null,
      T: null
    },
    ENFJ: {
      A: null,
      T: null
    },
    ENFP: {
      A: null,
      T: null
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
      A: null,
      T: null
    },
    INFJ: {
      A: null,
      T: null
    },
    INFP: {
      A: null,
      T: null
    },
    ENFJ: {
      A: null,
      T: null
    },
    ENFP: {
      A: null,
      T: null
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
      A: null,
      T: null
    },
    INFJ: {
      A: null,
      T: null
    },
    INFP: {
      A: null,
      T: null
    },
    ENFJ: {
      A: null,
      T: null
    },
    ENFP: {
      A: null,
      T: null
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
      A: null,
      T: null
    },
    INFJ: {
      A: null,
      T: null
    },
    INFP: {
      A: null,
      T: null
    },
    ENFJ: {
      A: null,
      T: null
    },
    ENFP: {
      A: null,
      T: null
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
      A: null,
      T: null
    },
    INFJ: {
      A: null,
      T: null
    },
    INFP: {
      A: null,
      T: null
    },
    ENFJ: {
      A: null,
      T: null
    },
    ENFP: {
      A: null,
      T: null
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
      A: null,
      T: null
    },
    INFJ: {
      A: null,
      T: null
    },
    INFP: {
      A: null,
      T: null
    },
    ENFJ: {
      A: null,
      T: null
    },
    ENFP: {
      A: null,
      T: null
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
      A: null,
      T: null
    },
    INFJ: {
      A: null,
      T: null
    },
    INFP: {
      A: null,
      T: null
    },
    ENFJ: {
      A: null,
      T: null
    },
    ENFP: {
      A: null,
      T: null
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
      A: null,
      T: null
    },
    INFJ: {
      A: null,
      T: null
    },
    INFP: {
      A: null,
      T: null
    },
    ENFJ: {
      A: null,
      T: null
    },
    ENFP: {
      A: null,
      T: null
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
      A: null,
      T: null
    },
    INFJ: {
      A: null,
      T: null
    },
    INFP: {
      A: null,
      T: null
    },
    ENFJ: {
      A: null,
      T: null
    },
    ENFP: {
      A: null,
      T: null
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
      A: null,
      T: null
    },
    INFJ: {
      A: null,
      T: null
    },
    INFP: {
      A: null,
      T: null
    },
    ENFJ: {
      A: null,
      T: null
    },
    ENFP: {
      A: null,
      T: null
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
      A: null,
      T: null
    },
    INFJ: {
      A: null,
      T: null
    },
    INFP: {
      A: null,
      T: null
    },
    ENFJ: {
      A: null,
      T: null
    },
    ENFP: {
      A: null,
      T: null
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
      A: null,
      T: null
    },
    INFJ: {
      A: null,
      T: null
    },
    INFP: {
      A: null,
      T: null
    },
    ENFJ: {
      A: null,
      T: null
    },
    ENFP: {
      A: null,
      T: null
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
      A: null,
      T: null
    },
    INFJ: {
      A: null,
      T: null
    },
    INFP: {
      A: null,
      T: null
    },
    ENFJ: {
      A: null,
      T: null
    },
    ENFP: {
      A: null,
      T: null
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
      A: null,
      T: null
    },
    INFJ: {
      A: null,
      T: null
    },
    INFP: {
      A: null,
      T: null
    },
    ENFJ: {
      A: null,
      T: null
    },
    ENFP: {
      A: null,
      T: null
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
      A: null,
      T: null
    },
    INFJ: {
      A: null,
      T: null
    },
    INFP: {
      A: null,
      T: null
    },
    ENFJ: {
      A: null,
      T: null
    },
    ENFP: {
      A: null,
      T: null
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
      A: null,
      T: null
    },
    INFJ: {
      A: null,
      T: null
    },
    INFP: {
      A: null,
      T: null
    },
    ENFJ: {
      A: null,
      T: null
    },
    ENFP: {
      A: null,
      T: null
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
      A: null,
      T: null
    },
    INFJ: {
      A: null,
      T: null
    },
    INFP: {
      A: null,
      T: null
    },
    ENFJ: {
      A: null,
      T: null
    },
    ENFP: {
      A: null,
      T: null
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
      A: null,
      T: null
    },
    INFJ: {
      A: null,
      T: null
    },
    INFP: {
      A: null,
      T: null
    },
    ENFJ: {
      A: null,
      T: null
    },
    ENFP: {
      A: null,
      T: null
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
      A: null,
      T: null
    },
    INFJ: {
      A: null,
      T: null
    },
    INFP: {
      A: null,
      T: null
    },
    ENFJ: {
      A: null,
      T: null
    },
    ENFP: {
      A: null,
      T: null
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
      A: null,
      T: null
    },
    INFJ: {
      A: null,
      T: null
    },
    INFP: {
      A: null,
      T: null
    },
    ENFJ: {
      A: null,
      T: null
    },
    ENFP: {
      A: null,
      T: null
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
      A: null,
      T: null
    },
    INFJ: {
      A: null,
      T: null
    },
    INFP: {
      A: null,
      T: null
    },
    ENFJ: {
      A: null,
      T: null
    },
    ENFP: {
      A: null,
      T: null
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
      A: null,
      T: null
    },
    INFJ: {
      A: null,
      T: null
    },
    INFP: {
      A: null,
      T: null
    },
    ENFJ: {
      A: null,
      T: null
    },
    ENFP: {
      A: null,
      T: null
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
      A: null,
      T: null
    },
    INFJ: {
      A: null,
      T: null
    },
    INFP: {
      A: null,
      T: null
    },
    ENFJ: {
      A: null,
      T: null
    },
    ENFP: {
      A: null,
      T: null
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
      A: null,
      T: null
    },
    INFJ: {
      A: null,
      T: null
    },
    INFP: {
      A: null,
      T: null
    },
    ENFJ: {
      A: null,
      T: null
    },
    ENFP: {
      A: null,
      T: null
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
      A: null,
      T: null
    },
    INFJ: {
      A: null,
      T: null
    },
    INFP: {
      A: null,
      T: null
    },
    ENFJ: {
      A: null,
      T: null
    },
    ENFP: {
      A: null,
      T: null
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
      A: null,
      T: null
    },
    INFJ: {
      A: null,
      T: null
    },
    INFP: {
      A: null,
      T: null
    },
    ENFJ: {
      A: null,
      T: null
    },
    ENFP: {
      A: null,
      T: null
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
      A: null,
      T: null
    },
    INFJ: {
      A: null,
      T: null
    },
    INFP: {
      A: null,
      T: null
    },
    ENFJ: {
      A: null,
      T: null
    },
    ENFP: {
      A: null,
      T: null
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