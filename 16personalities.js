const population = 4645382

const percentages = {
  INTJ: {
    A: 1.04,
    T: 1.14
  },
  INTP: {
    A: 1.63,
    T: 2.13
  },
  ENTJ: {
    A: 1.06,
    T: 0.74
  },
  ENTP: {
    A: 2.11,
    T: 1.45
  },
  INFJ: {
    A: 1.33,
    T: 3.14
  },
  INFP: {
    A: 2.39,
    T: 5.94
  },
  ENFJ: {
    A: 2.22,
    T: 2.03
  },
  ENFP: {
    A: 4.49,
    T: 4.43
  },
  ISTJ: {
    A: 3.61,
    T: 2.22
  },
  ISFJ: {
    A: 5.96,
    T: 6.35
  },
  ESTJ: {
    A: 5.06,
    T: 1.31
  },
  ESFJ: {
    A: 10.11,
    T: 3.98
  },
  ISTP: {
    A: 2.18,
    T: 1.56
  },
  ISFP: {
    A: 3.54,
    T: 4.23
  },
  ESTP: {
    A: 2.91,
    T: 0.98
  },
  ESFP: {
    A: 5.82,
    T: 2.91
  }
}

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
      A: 3.85,
      T: 2.15
    },
    ISFJ: {
      A: 5.89,
      T: 5.88
    },
    ESTJ: {
      A: 5.39,
      T: 1.34
    },
    ESFJ: {
      A: 10.07,
      T: 3.71
    },
    ISTP: {
      A: 2.25,
      T: 1.55
    },
    ISFP: {
      A: 3.49,
      T: 3.95
    },
    ESTP: {
      A: 3.09,
      T: 0.99
    },
    ESFP: {
      A: 5.67,
      T: 2.76
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
      A: 3.9,
      T: 1.24
    },
    ISFJ: {
      A: 6.54,
      T: 7.08
    },
    ESTJ: {
      A: 4.98,
      T: 1.24
    },
    ESFJ: {
      A: 9.68,
      T: 3.79
    },
    ISTP: {
      A: 2.33,
      T: 1.55
    },
    ISFP: {
      A: 3.84,
      T: 4.54
    },
    ESTP: {
      A: 2.83,
      T: 0.9
    },
    ESFP: {
      A: 5.76,
      T: 2.75
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
      A: 3.67,
      T: 2.13
    },
    ISFJ: {
      A: 6.73,
      T: 7.06
    },
    ESTJ: {
      A: 4.74,
      T: 1.31
    },
    ESFJ: {
      A: 10.19,
      T: 4.27
    },
    ISTP: {
      A: 2.26,
      T: 1.43
    },
    ISFP: {
      A: 3.66,
      T: 4.44
    },
    ESTP: {
      A: 2.64,
      T: 0.87
    },
    ESFP: {
      A: 5.96,
      T: 2.78
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
      A: 3.79,
      T: 2.25
    },
    ISFJ: {
      A: 6.42,
      T: 7.19
    },
    ESTJ: {
      A: 4.45,
      T: 1.2
    },
    ESFJ: {
      A: 9.83,
      T: 4.2
    },
    ISTP: {
      A: 2.06,
      T: 1.39
    },
    ISFP: {
      A: 3.81,
      T: 4.48
    },
    ESTP: {
      A: 2.73,
      T: 0.97
    },
    ESFP: {
      A: 6.17,
      T: 3.06
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
      A: 3.37,
      T: 2.25
    },
    ISFJ: {
      A: 6.91,
      T: 7.54
    },
    ESTJ: {
      A: 4.52,
      T: 1.03
    },
    ESFJ: {
      A: 10.27,
      T: 4.11
    },
    ISTP: {
      A: 2.09,
      T: 1.48
    },
    ISFP: {
      A: 4.06,
      T: 4.95
    },
    ESTP: {
      A: 2.87,
      T: 0.8
    },
    ESFP: {
      A: 5.64,
      T: 2.33
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
      A: 3.92,
      T: 2.1
    },
    ISFJ: {
      A: 7.17,
      T: 7.48
    },
    ESTJ: {
      A: 3.82,
      T: 0.96
    },
    ESFJ: {
      A: 10.8,
      T: 4.16
    },
    ISTP: {
      A: 2.46,
      T: 1.48
    },
    ISFP: {
      A: 4.01,
      T: 4.68
    },
    ESTP: {
      A: 3.02,
      T: 0.69
    },
    ESFP: {
      A: 6.43,
      T: 3.02
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
      A: 4.09,
      T: 2.1
    },
    ISFJ: {
      A: 6.18,
      T: 6.06
    },
    ESTJ: {
      A: 5.05,
      T: 1.05
    },
    ESFJ: {
      A: 9.67,
      T: 2.88
    },
    ISTP: {
      A: 2.39,
      T: 1.67
    },
    ISFP: {
      A: 4.12,
      T: 3.97
    },
    ESTP: {
      A: 2.95,
      T: 0.88
    },
    ESFP: {
      A: 5.72,
      T: 2.53
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
      A: 4.04,
      T: 2.04
    },
    ISFJ: {
      A: 6.38,
      T: 6.4
    },
    ESTJ: {
      A: 4.99,
      T: 1.21
    },
    ESFJ: {
      A: 10.59,
      T: 3.79
    },
    ISTP: {
      A: 2.26,
      T: 1.34
    },
    ISFP: {
      A: 3.7,
      T: 3.95
    },
    ESTP: {
      A: 2.98,
      T: 0.85
    },
    ESFP: {
      A: 6.29,
      T: 2.64
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
      A: 3.09,
      T: 1.78
    },
    ISFJ: {
      A: 6.75,
      T: 7.22
    },
    ESTJ: {
      A: 3.83,
      T: 1.03
    },
    ESFJ: {
      A: 10.9,
      T: 4.37
    },
    ISTP: {
      A: 1.86,
      T: 1.16
    },
    ISFP: {
      A: 3.99,
      T: 4.56
    },
    ESTP: {
      A: 2.34,
      T: 0.76
    },
    ESFP: {
      A: 6.57,
      T: 3.29
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
      A: 3.82,
      T: 2.23
    },
    ISFJ: {
      A: 6.11,
      T: 6.1
    },
    ESTJ: {
      A: 5.2,
      T: 1.22
    },
    ESFJ: {
      A: 10.29,
      T: 3.73
    },
    ISTP: {
      A: 2.22,
      T: 1.53
    },
    ISFP: {
      A: 3.47,
      T: 3.98
    },
    ESTP: {
      A: 2.86,
      T: 0.94
    },
    ESFP: {
      A: 5.59,
      T: 2.68
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
      A: 3.74,
      T: 2.25
    },
    ISFJ: {
      A: 6.57,
      T: 7.28
    },
    ESTJ: {
      A: 4.26,
      T: 1
    },
    ESFJ: {
      A: 9.85,
      T: 3.5
    },
    ISTP: {
      A: 2.39,
      T: 1.72
    },
    ISFP: {
      A: 4.42,
      T: 4.63
    },
    ESTP: {
      A: 2.51,
      T: 0.69
    },
    ESFP: {
      A: 6.56,
      T: 2.85
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
      A: 3.63,
      T: 2.09
    },
    ISFJ: {
      A: 6.97,
      T: 7.02
    },
    ESTJ: {
      A: 4.48,
      T: 1.16
    },
    ESFJ: {
      A: 10.37,
      T: 3.86
    },
    ISTP: {
      A: 2.18,
      T: 1.28
    },
    ISFP: {
      A: 4.21,
      T: 4.68
    },
    ESTP: {
      A: 2.5,
      T: 0.8
    },
    ESFP: {
      A: 6.53,
      T: 2.89
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
      A: 3.86,
      T: 2.26
    },
    ISFJ: {
      A: 7.55,
      T: 6.73
    },
    ESTJ: {
      A: 4.43,
      T: 1.08
    },
    ESFJ: {
      A: 9.54,
      T: 3.6
    },
    ISTP: {
      A: 2.37,
      T: 1.77
    },
    ISFP: {
      A: 4.33,
      T: 4.93
    },
    ESTP: {
      A: 2.77,
      T: 0.73
    },
    ESFP: {
      A: 6.04,
      T: 2.91
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
      A: 3.88,
      T: 2.3
    },
    ISFJ: {
      A: 5.61,
      T: 5.63
    },
    ESTJ: {
      A: 5.3,
      T: 1.14
    },
    ESFJ: {
      A: 9.39,
      T: 3.5
    },
    ISTP: {
      A: 2.33,
      T: 1.71
    },
    ISFP: {
      A: 3.4,
      T: 4.13
    },
    ESTP: {
      A: 2.81,
      T: 1.03
    },
    ESFP: {
      A: 5.25,
      T: 2.5
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
      A: 3.75,
      T: 2.19
    },
    ISFJ: {
      A: 7.1,
      T: 6.91
    },
    ESTJ: {
      A: 4.2,
      T: 1.01
    },
    ESFJ: {
      A: 9.68,
      T: 3.54
    },
    ISTP: {
      A: 2.34,
      T: 1.63
    },
    ISFP: {
      A: 4.25,
      T: 4.81
    },
    ESTP: {
      A: 2.61,
      T: 0.89
    },
    ESFP: {
      A: 6.27,
      T: 3.02
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
      A: 3.54,
      T: 2.31
    },
    ISFJ: {
      A: 6.35,
      T: 7.15
    },
    ESTJ: {
      A: 4.38,
      T: 1.15
    },
    ESFJ: {
      A: 9.94,
      T: 4.38
    },
    ISTP: {
      A: 2.44,
      T: 1.64
    },
    ISFP: {
      A: 3.92,
      T: 4.7
    },
    ESTP: {
      A: 2.85,
      T: 1
    },
    ESFP: {
      A: 6.08,
      T: 3.09
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
      A: 3.84,
      T: 2.24
    },
    ISFJ: {
      A: 6.75,
      T: 6.74
    },
    ESTJ: {
      A: 4.49,
      T: 1.1
    },
    ESFJ: {
      A: 9.96,
      T: 3.67
    },
    ISTP: {
      A: 2.37,
      T: 1.6
    },
    ISFP: {
      A: 4.16,
      T: 4.48
    },
    ESTP: {
      A: 2.75,
      T: 0.9
    },
    ESFP: {
      A: 6.15,
      T: 3.01
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
      A: 3.51,
      T: 2.14
    },
    ISFJ: {
      A: 5.71,
      T: 5.66
    },
    ESTJ: {
      A: 5.29,
      T: 1.31
    },
    ESFJ: {
      A: 10.1,
      T: 3.76
    },
    ISTP: {
      A: 2.26,
      T: 1.61
    },
    ISFP: {
      A: 3.61,
      T: 4.12
    },
    ESTP: {
      A: 2.94,
      T: 1.05
    },
    ESFP: {
      A: 5.96,
      T: 2.94
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
      A: 3.47,
      T: 2.17
    },
    ISFJ: {
      A: 6.86,
      T: 7.27
    },
    ESTJ: {
      A: 4.38,
      T: 1.18
    },
    ESFJ: {
      A: 10.84,
      T: 4.18
    },
    ISTP: {
      A: 2.16,
      T: 1.38
    },
    ISFP: {
      A: 4.03,
      T: 4.63
    },
    ESTP: {
      A: 2.67,
      T: 0.9
    },
    ESFP: {
      A: 6.69,
      T: 3.25
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
      A: 3.44,
      T: 2.28
    },
    ISFJ: {
      A: 6.43,
      T: 7.62
    },
    ESTJ: {
      A: 4.43,
      T: 1.21
    },
    ESFJ: {
      A: 10.1,
      T: 4.58
    },
    ISTP: {
      A: 2.25,
      T: 1.53
    },
    ISFP: {
      A: 3.93,
      T: 4.91
    },
    ESTP: {
      A: 2.72,
      T: 0.89 
    },
    ESFP: {
      A: 6.08,
      T: 3.26
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
      A: 3.58,
      T: 2.26
    },
    ISFJ: {
      A: 6.3,
      T: 7.03
    },
    ESTJ: {
      A: 4.75,
      T: 1.22
    },
    ESFJ: {
      A: 9.93,
      T: 4.27
    },
    ISTP: {
      A: 2.11,
      T: 1.47
    },
    ISFP: {
      A: 3.63,
      T: 4.36
    },
    ESTP: {
      A: 2.76,
      T: 0.95
    },
    ESFP: {
      A: 5.69,
      T: 3.03
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
      A: 3.83,
      T: 2.13
    },
    ISFJ: {
      A: 6.18,
      T: 6.82
    },
    ESTJ: {
      A: 5.14,
      T: 1.34
    },
    ESFJ: {
      A: 10.31,
      T: 3.88
    },
    ISTP: {
      A: 2.18,
      T: 1.51
    },
    ISFP: {
      A: 3.77,
      T: 4.31
    },
    ESTP: {
      A: 2.96,
      T: 0.84
    },
    ESFP: {
      A: 5.78,
      T: 2.55
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
      A: 3.37,
      T: 2.26
    },
    ISFJ: {
      A: 5.84,
      T: 6.08
    },
    ESTJ: {
      A: 5.2,
      T: 1.5
    },
    ESFJ: {
      A: 9.89,
      T: 4.02
    },
    ISTP: {
      A: 2.12,
      T: 1.5
    },
    ISFP: {
      A: 3.41,
      T: 4.01
    },
    ESTP: {
      A: 2.93,
      T: 1.04
    },
    ESFP: {
      A: 5.44,
      T: 2.82
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
      A: 3.5,
      T: 2.28
    },
    ISFJ: {
      A: 5.92,
      T: 6.84
    },
    ESTJ: {
      A: 4.54,
      T: 1.29
    },
    ESFJ: {
      A: 9.78,
      T: 4.24
    },
    ISTP: {
      A: 2.03,
      T: 1.6
    },
    ISFP: {
      A: 3.59,
      T: 4.6
    },
    ESTP: {
      A: 2.68,
      T: 0.95
    },
    ESFP: {
      A: 5.73,
      T: 2.95
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
      A: 3.44,
      T: 2.18
    },
    ISFJ: {
      A: 5.6,
      T: 6.39
    },
    ESTJ: {
      A: 5.08,
      T: 1.39
    },
    ESFJ: {
      A: 10.55,
      T: 4.39
    },
    ISTP: {
      A: 2.08,
      T: 1.52
    },
    ISFP: {
      A: 3.21,
      T: 4.2
    },
    ESTP: {
      A: 2.97,
      T: 0.97
    },
    ESFP: {
      A: 5.91,
      T: 3.17
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
      A: 3.65,
      T: 2.32
    },
    ISFJ: {
      A: 6.28,
      T: 7.05
    },
    ESTJ: {
      A: 4.98,
      T: 1.26
    },
    ESFJ: {
      A: 10.54,
      T: 4.3
    },
    ISTP: {
      A: 2.04,
      T: 1.46
    },
    ISFP: {
      A: 3.52,
      T: 4.35
    },
    ESTP: {
      A: 2.78,
      T: 0.99
    },
    ESFP: {
      A: 5.8,
      T: 3.06
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
      A: 3.52,
      T: 2.38
    },
    ISFJ: {
      A: 6.05,
      T: 7.05
    },
    ESTJ: {
      A: 4.71,
      T: 1.24
    },
    ESFJ: {
      A: 9.98,
      T: 4.2
    },
    ISTP: {
      A: 2.18,
      T: 1.58
    },
    ISFP: {
      A: 3.51,
      T: 0.93
    },
    ESTP: {
      A: 2.72,
      T: 0.93
    },
    ESFP: {
      A: 5.49,
      T: 3.02
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
      A: 3.58,
      T: 2.48
    },
    ISFJ: {
      A: 6.05,
      T: 7.25
    },
    ESTJ: {
      A: 4.66,
      T: 1.24
    },
    ESFJ: {
      A: 9.29,
      T: 4.07
    },
    ISTP: {
      A: 2.14,
      T: 1.69
    },
    ISFP: {
      A: 3.34,
      T: 4.74
    },
    ESTP: {
      A: 2.67,
      T: 1.01
    },
    ESFP: {
      A: 5.42,
      T: 2.93
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
      A: 3.85,
      T: 2.25
    },
    ISFJ: {
      A: 6.22,
      T: 6.64
    },
    ESTJ: {
      A: 5.27,
      T: 1.39
    },
    ESFJ: {
      A: 10.6,
      T: 4.15
    },
    ISTP: {
      A: 2.08,
      T: 1.46
    },
    ISFP: {
      A: 3.48,
      T: 4.04
    },
    ESTP: {
      A: 2.91,
      T: 0.95
    },
    ESFP: {
      A: 5.84,
      T: 2.83
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
      A: 3.36,
      T: 2.09
    },
    ISFJ: {
      A: 5.71,
      T: 6.06
    },
    ESTJ: {
      A: 5.93,
      T: 1.38
    },
    ESFJ: {
      A: 10.63,
      T: 4.2
    },
    ISTP: {
      A: 2.18,
      T: 1.38
    },
    ISFP: {
      A: 3.29,
      T: 3.72
    },
    ESTP: {
      A: 3.41,
      T: 1.06
    },
    ESFP: {
      A: 6,
      T: 2.73
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
      A: 3.61,
      T: 2.22
    },
    ISFJ: {
      A: 6.03,
      T: 6.79
    },
    ESTJ: {
      A: 5.31,
      T: 1.4
    },
    ESFJ: {
      A: 10.68,
      T: 4.13
    },
    ISTP: {
      A: 2.18,
      T: 1.51
    },
    ISFP: {
      A: 3.38,
      T: 4.09
    },
    ESTP: {
      A: 3.07,
      T: 0.96
    },
    ESFP: {
      A: 5.68,
      T: 2.96
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
      A: 3.58,
      T: 2.17
    },
    ISFJ: {
      A: 5.75,
      T: 5.57
    },
    ESTJ: {
      A: 5.53,
      T: 1.31
    },
    ESFJ: {
      A: 10.7,
      T: 3.5
    },
    ISTP: {
      A: 2.12,
      T: 1.53
    },
    ISFP: {
      A: 3.26,
      T: 3.79
    },
    ESTP: {
      A: 3.06,
      T: 0.96
    },
    ESFP: {
      A: 5.44,
      T: 2.44
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
      A: 3.83,
      T: 2.2
    },
    ISFJ: {
      A: 5.96,
      T: 6.09
    },
    ESTJ: {
      A: 5.42,
      T: 1.35
    },
    ESFJ: {
      A: 10.68,
      T: 3.85
    },
    ISTP: {
      A: 2.25,
      T: 1.49
    },
    ISFP: {
      A: 3.33,
      T: 3.81
    },
    ESTP: {
      A: 2.97,
      T: 0.97
    },
    ESFP: {
      A: 5.58,
      T: 2.68
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
      A: 3.7,
      T: 2.35
    },
    ISFJ: {
      A: 6.12,
      T: 6.68
    },
    ESTJ: {
      A: 5.15,
      T: 1.46
    },
    ESFJ: {
      A: 10.9,
      T: 4.31
    },
    ISTP: {
      A: 2.08,
      T: 1.43
    },
    ISFP: {
      A: 3.24,
      T: 4.02
    },
    ESTP: {
      A: 2.89,
      T: 0.94
    },
    ESFP: {
      A: 5.84,
      T: 2.84
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
      A: 3.71,
      T: 2.16
    },
    ISFJ: {
      A: 6.18,
      T: 6.71
    },
    ESTJ: {
      A: 5.2,
      T: 1.32
    },
    ESFJ: {
      A: 10.26,
      T: 3.99
    },
    ISTP: {
      A: 2.23,
      T: 1.51
    },
    ISFP: {
      A: 3.38,
      T: 4.18
    },
    ESTP: {
      A: 3,
      T: 0.92
    },
    ESFP: {
      A: 5.65,
      T: 2.79
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
      A: 4.03,
      T: 2.42
    },
    ISFJ: {
      A: 6.15,
      T: 6.49
    },
    ESTJ: {
      A: 5.63,
      T: 1.35
    },
    ESFJ: {
      A: 10.12,
      T: 4.03
    },
    ISTP: {
      A: 2.38,
      T: 1.59
    },
    ISFP: {
      A: 3.51,
      T: 4.2
    },
    ESTP: {
      A: 3.07,
      T: 1.01
    },
    ESFP: {
      A: 5.54,
      T: 2.87
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
      A: 3.67,
      T: 2.59
    },
    ISFJ: {
      A: 5.39,
      T: 7.08
    },
    ESTJ: {
      A: 4.56,
      T: 1.19
    },
    ESFJ: {
      A: 8.58,
      T: 3.48
    },
    ISTP: {
      A: 2.31,
      T: 1.73
    },
    ISFP: {
      A: 3.54,
      T: 5.25
    },
    ESTP: {
      A: 2.47,
      T: 0.97
    },
    ESFP: {
      A: 4.78,
      T: 2.68
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
      A: 3.98,
      T: 2.36
    },
    ISFJ: {
      A: 5.77,
      T: 6.3
    },
    ESTJ: {
      A: 5.23,
      T: 1.37
    },
    ESFJ: {
      A: 9.86,
      T: 4.07
    },
    ISTP: {
      A: 2.26,
      T: 1.63
    },
    ISFP: {
      A: 3.44,
      T: 4.14
    },
    ESTP: {
      A: 3.08,
      T: 1.01
    },
    ESFP: {
      A: 5.52,
      T: 2.84
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
      A: 3.36,
      T: 2.36
    },
    ISFJ: {
      A: 5.28,
      T: 6.08
    },
    ESTJ: {
      A: 4.89,
      T: 1.48
    },
    ESFJ: {
      A: 9.64,
      T: 4.02
    },
    ISTP: {
      A: 2.04,
      T: 1.94
    },
    ISFP: {
      A: 3.19,
      T: 4.29
    },
    ESTP: {
      A: 2.92,
      T: 1.07
    },
    ESFP: {
      A: 5.54,
      T: 2.98
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
      A: 3.44,
      T: 2.39
    },
    ISFJ: {
      A: 5.71,
      T: 6.99
    },
    ESTJ: {
      A: 4.64,
      T: 1.41
    },
    ESFJ: {
      A: 9.54,
      T: 4.33
    },
    ISTP: {
      A: 2.04,
      T: 1.67
    },
    ISFP: {
      A: 3.29,
      T: 4.5
    },
    ESTP: {
      A: 2.7,
      T: 1.07
    },
    ESFP: {
      A: 5.56,
      T: 3.09
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
      A: 3.33,
      T: 2.31
    },
    ISFJ: {
      A: 5.3,
      T: 6.03
    },
    ESTJ: {
      A: 5.23,
      T: 1.51
    },
    ESFJ: {
      A: 9.87,
      T: 4.26
    },
    ISTP: {
      A: 1.99,
      T: 1.71
    },
    ISFP: {
      A: 3.15,
      T: 4.13
    },
    ESTP: {
      A: 3.01,
      T: 1.14
    },
    ESFP: {
      A: 5.66,
      T: 2.94
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
      A: 3.62,
      T: 2.39
    },
    ISFJ: {
      A: 5.48,
      T: 6.45
    },
    ESTJ: {
      A: 5,
      T: 1.45
    },
    ESFJ: {
      A: 10.02,
      T: 4.13
    },
    ISTP: {
      A: 2.1,
      T: 1.56
    },
    ISFP: {
      A: 3.07,
      T: 4.21
    },
    ESTP: {
      A: 2.8,
      T: 1.01
    },
    ESFP: {
      A: 5.74,
      T: 3.01
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
      A: 3.11,
      T: 2.16
    },
    ISFJ: {
      A: 5.49,
      T: 6.83
    },
    ESTJ: {
      A: 4.31,
      T: 1.35
    },
    ESFJ: {
      A: 9.18,
      T: 4.01
    },
    ISTP: {
      A: 2.02,
      T: 1.66
    },
    ISFP: {
      A: 3.17,
      T: 4.84
    },
    ESTP: {
      A: 2.83,
      T: 1.04
    },
    ESFP: {
      A: 5.25,
      T: 3.04
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
      A: 3.3,
      T: 2.43
    },
    ISFJ: {
      A: 5.74,
      T: 6.9
    },
    ESTJ: {
      A: 4.7,
      T: 1.41
    },
    ESFJ: {
      A: 9.96,
      T: 4.67
    },
    ISTP: {
      A: 1.97,
      T: 1.66
    },
    ISFP: {
      A: 3.41,
      T: 4.44
    },
    ESTP: {
      A: 2.77,
      T: 1.07
    },
    ESFP: {
      A: 5.88,
      T: 3.27
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
      A: 3.39,
      T: 2.15
    },
    ISFJ: {
      A: 6.76,
      T: 7.2
    },
    ESTJ: {
      A: 4.3,
      T: 1.08
    },
    ESFJ: {
      A: 8.86,
      T: 3.91
    },
    ISTP: {
      A: 2.19,
      T: 1.72
    },
    ISFP: {
      A: 4,
      T: 5.19
    },
    ESTP: {
      A: 2.31,
      T: 0.94
    },
    ESFP: {
      A: 5.79,
      T: 2.97
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
      A: 3.48,
      T: 2.3
    },
    ISFJ: {
      A: 5.99,
      T: 7.35
    },
    ESTJ: {
      A: 4.33,
      T: 1.04
    },
    ESFJ: {
      A: 9.73,
      T: 4.27
    },
    ISTP: {
      A: 2.35,
      T: 1.68
    },
    ISFP: {
      A: 3.78,
      T: 4.84
    },
    ESTP: {
      A: 2.58,
      T: 0.87
    },
    ESFP: {
      A: 5.46,
      T: 2.91
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
      A: 3.15,
      T: 2.61
    },
    ISFJ: {
      A: 6.04,
      T: 7.62
    },
    ESTJ: {
      A: 4.12,
      T: 1.22
    },
    ESFJ: {
      A: 8.77,
      T: 4.04
    },
    ISTP: {
      A: 2.03,
      T: 1.86
    },
    ISFP: {
      A: 4.32,
      T: 5.37
    },
    ESTP: {
      A: 2.6,
      T: 0.92
    },
    ESFP: {
      A: 5.56,
      T: 2.72
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
      A: 4.48,
      T: 2.51
    },
    ISFJ: {
      A: 6.47,
      T: 6.66
    },
    ESTJ: {
      A: 4.3,
      T: 1.05
    },
    ESFJ: {
      A: 8.53,
      T: 2.85
    },
    ISTP: {
      A: 3,
      T: 1.57
    },
    ISFP: {
      A: 4.81,
      T: 5.15
    },
    ESTP: {
      A: 2.9,
      T: 0.88
    },
    ESFP: {
      A: 6.14,
      T: 2.5
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
      A: 3.64,
      T: 1.88
    },
    ISFJ: {
      A: 6.95,
      T: 6.26
    },
    ESTJ: {
      A: 4.65,
      T: 1.03
    },
    ESFJ: {
      A: 10.58,
      T: 3.54
    },
    ISTP: {
      A: 2.11,
      T: 1.26
    },
    ISFP: {
      A: 4.28,
      T: 4.63
    },
    ESTP: {
      A: 2.62,
      T: 0.84
    },
    ESFP: {
      A: 6.73,
      T: 2.94
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
      A: 3.57,
      T: 2.3
    },
    ISFJ: {
      A: 5.67,
      T: 6.16
    },
    ESTJ: {
      A: 5.1,
      T: 1.4
    },
    ESFJ: {
      A: 9.89,
      T: 3.62
    },
    ISTP: {
      A: 2.29,
      T: 1.7
    },
    ISFP: {
      A: 3.36,
      T: 4.46
    },
    ESTP: {
      A: 3.18,
      T: 0.98
    },
    ESFP: {
      A: 5.51,
      T: 3.09
    }
  }
}