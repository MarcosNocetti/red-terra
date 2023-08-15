import {
  Collapse,
  Divider,
  IconButton,
  List,
  Toolbar,
  Tooltip,
} from '@mui/material'
import { Drawer } from './styles'
import { INavigationProps } from '../../interfaces/navigationProps'
import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { ISidebarListItems } from '../../interfaces/sidebarListItems'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'

const list: ISidebarListItems[] = [
  {
    label: 'Awards',
    open: false,
    items: [
      { label: 'List Awards', pathname: '/admin/awards' },
      { label: 'Create Award', pathname: '/admin/awards/create' }
    ]
  },
  {
    label: 'Contact',
    open: false,
    pathname: '/admin/contact'
  },
  {
    label: 'Footer',
    open: false,
    items: [
      { label: 'Footer', pathname: '/admin/footers' },
      { label: 'List Links', pathname: '/admin/footers/links' },
    ]
  },
  // {
  //   label: 'Header',
  //   open: false,
  //   items: [
  //     { label: 'List Links', pathname: '/admin/headers/links' }
  //   ]
  // },
  // { label: 'Home', open: false, pathname: '/admin/home' },
  {
    label: 'Users',
    open: false,
    items: [
      { label: 'List Users', pathname: '/admin/users' },
      { label: 'Create User', pathname: '/admin/users/create' }
    ]
  },
  {
    label: 'What we do',
    open: false,
    items: [
      { label: 'What we do', pathname: '/admin/whatWeDo' },
      { label: 'List Credits', pathname: '/admin/whatWeDo/credits' },
      { label: 'Create Credit', pathname: '/admin/whatWeDo/credits/create' },
      {
        label: 'List Documentaries',
        pathname: '/admin/whatWeDo/documentaries'
      },
      {
        label: 'Create Documentary',
        pathname: '/admin/whatWeDo/documentaries/create'
      }
    ]
  },
  {
    label: "What's Happening",
    open: false,
    items: [
      { label: "What's Happening", pathname: '/admin/whatsHappening' },
      { label: 'List News', pathname: '/admin/whatsHappening/news' },
      { label: 'Create News', pathname: '/admin/whatsHappening/news/create' }
    ]
  },
  {
    label: 'Who we are',
    open: false,
    items: [
      { label: 'Who we are', pathname: '/admin/whoWeAre' },
      {
        label: 'List Client Reviews',
        pathname: '/admin/whoWeAre/clientReviews'
      },
      {
        label: 'Create Client Review',
        pathname: '/admin/whoWeAre/clientReviews/create'
      },
      { label: 'List Rdn', pathname: '/admin/whoWeAre/rdn' },
      { label: 'Create Rdn', pathname: '/admin/whoWeAre/rdn/create' },
      { label: 'List Team', pathname: '/admin/whoWeAre/team' },
      { label: 'Create Team Person', pathname: '/admin/whoWeAre/team/create' }
    ]
  }
]

function Sidebar(props: INavigationProps): JSX.Element {
  const { open, toggleDrawer } = props
  const [sidebarListItems, setSidebarListItems] = useState(list)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect((): void => {}, [location.pathname])

  function handleSelectedPage(pathname: string): boolean {
    if (pathname === location.pathname) {
      return true
    }

    return false
  }

  function handleChangePage(pathname: string): void {
    navigate(pathname)
  }

  function handleOpenSidebarItem(label: string) {
    setSidebarListItems((prevState) =>
      prevState.map((state) =>
        state.label === label
          ? { ...state, open: !state.open }
          : { ...state, open: false }
      )
    )
  }

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      open={open}
      sx={{
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: open ? 240 : 0,
          boxSizing: 'border-box'
        }
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          px: [1],
          height: 80
        }}
      >
        <IconButton onClick={toggleDrawer}>
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <List component="nav" sx={{ height: 'calc(100vh - 81px)' }}>
        {sidebarListItems.map(({ label, pathname, items, open }) =>
          items?.length ? (
            <>
              <Tooltip title={label} placement="right" key={label + 1}>
                <>
                  <ListItemButton
                    sx={{ borderTop: '1px solid #ccc' }}
                    onClick={() => handleOpenSidebarItem(label)}
                  >
                    <ListItemText primary={label} />
                    {open ? (
                      <ExpandLess
                        onClick={() => handleOpenSidebarItem(label)}
                      />
                    ) : (
                      <ExpandMore
                        onClick={() => handleOpenSidebarItem(label)}
                      />
                    )}
                  </ListItemButton>
                </>
              </Tooltip>
              <Collapse
                in={open}
                timeout="auto"
                unmountOnExit
                sx={!open ? { border: '1px solid #ccc' } : null}
                key={label + 2}
              >
                <List component="div">
                  {items.map(({ label, pathname }: any, i: number) => (
                    <Tooltip title={label} placement="right" key={label + i}>
                      <ListItemButton
                        onClick={() => handleChangePage(pathname)}
                        selected={handleSelectedPage(pathname)}
                        sx={{}}
                      >
                        <ListItemText secondary={label} />
                      </ListItemButton>
                    </Tooltip>
                  ))}
                </List>
              </Collapse>
            </>
          ) : (
            <Tooltip title={label} placement="right" key={label + 4}>
              <ListItemButton
                onClick={() => handleChangePage(pathname as string)}
                selected={handleSelectedPage(pathname as string)}
                sx={{
                  borderTop: '1px solid #ccc'
                }}
              >
                <ListItemText primary={label} />
              </ListItemButton>
            </Tooltip>
          )
        )}
      </List>
    </Drawer>
  )
}

export default Sidebar
