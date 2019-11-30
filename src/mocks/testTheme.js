
/*

* The size keys of sub objects get moved to the root level size keys
* This allows setting the size rules within the component it's self
* Given this, the two themes below will produce the same result =>

```js

  // theme1, size defined at the root level
  const theme1 = {
    small: {
      components: {
        button: {
          width: 30
        }
      }
    }
  }

  // theme2, size is defined within the component.button object
  // Size styles defined like this, will be move to the root level size object
  // So the end result will end up looking like theme1
  const theme2 = {
    components: {
      button: {
        small: {
          width: 30
        }
      }
    }
  }
  
```

* Size rules defined within the component, will override size rules defined from the root level
* Given this, using the theme below would set the button with to 100, not 30 =>

```js

const buttonTheme = {
  // Initial button width set to 30
  small: { components: { button: { width: 30 } } },
  components: {
    button: {
      // With set here overrides the width of 30 set above
      small: { width: 100 },
    }
  }
}

```

*/

const colors = {
  button: {
    text: '#2196f3',
    contained: '#2196f3',
    outlined: '#1287ea',
  }
}

export const buttonTheme = {
  small: { components: { button: { width: 30 } } },
  components: {
    button: {
      default: { small: { fontSize: 12, borderRadius: 10, }, },
      small: { width: 100 },
    }
  }
}

export const testTheme = {
  small: {
    components: {
      button: {
        width: 30
      }
    }
  },
  components: {
    button: {
      default: {
        padding: 8,
        borderRadius: 4,
        fontSize: 14,
        small: {
          fontSize: 12,
          borderRadius: 10,
        },
        medium: {
          fontSize: 16,
          padding: 15,
        },
        large: {
          fontSize: 18,
          padding: 20,
        }
      },
    }
  },
  colors,
  meeting: {
    large: {
      text: {
        time: {
          width: 135,
        },
      }
    },
    medium: {
      meetingListOffset: 200,
      text: {
        user: {
          width: 107,
        },
      },
    },
    xsmall: {
      meetingListOffset: 500,
      horizontalScroll: {
        flexDirection: 'row',
        flex: 1,
      },
      table: {
        backgroundColor: '#FFFFFF',
        flexDirection: 'column',
        minWidth: 735,
        flexGrow: 1,
      },
      meetingList: {
        flex: 1,
      },
      loader: {
        alignSelf: 'center'
      },
      deleteButton: {
        width: 90,
        height: 40,
        margin: 22,
        marginLeft: 19,
      },
      text: {
        spacing: {
          textAlign: 'left',
        },
        id: {
          width: 65,
        },
        user: {
          width: 95,
        },
        time: {
          width: 125,
        },
        company: {
          width: 90,
        },
      },
      checkIn: {
        width: 60,
        marginRight: 10,
      },
      header: {
        height: 55
      },
      row: {
        height: 90,
        padding: 10,
        paddingLeft: 27,
        borderBottomColor: 'rgba(0,0,0,0.1)',
        borderBottomStyle: 'solid',
        borderBottomWidth: '1px',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
      },
      columnHeader: {
        fontWeight: 'bold',
        fontSize: 12,
      },
      checkInIconButton: {
        padding: 12,
        width: 52,
        marginLeft: 5,
      },
      rowLoader: {
        marginTop: 31,
      },
    }
  },
  app: {
    container: {
      backgroundColor: '#f7f9fb',
      overflow: 'hidden',
      flex: 1,
      height: '100vh'
    },
    text: {
      flex: 1,
    },
    filter: {
      flex: 2,
      margin: 7,
      marginTop: 0,
    },
    table: {
      flex: 7,
      margin: 7,
      marginTop: 0,
    },
    bodyWrapper: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      flex: 1,
      padding: 18,
    }
  }
}