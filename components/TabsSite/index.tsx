// @ts-ignore

import { DetailedHTMLProps, HTMLAttributes, DOMAttributes } from 'react'
import { ItemButton } from '../ItemButton'

import { Tab, Tabs, TabProps, Col, TabsProps } from 'react-bootstrap'
import { DivProps } from 'react-html-props'
type T = {
  T: any
}
type tabs = React.HTMLProps<HTMLButtonElement> &
  React.HTMLAttributes<HTMLButtonElement>

interface PropsDivTab extends DOMAttributes<T> {
  tabs: tabs
  categorias: any
}

interface IntrinsicElements {
  tabs: any
  categorias: any
}

export const TabSite = ({ tabs, categorias }: any) => {
  console.log(tabs)
  return (
    <>
      <div
        className="col-md-6 col-xs-12 colItensLink"
        // @ts-ignore
        tabs={tabs}
        categorias={categorias}
      >
        <Tabs
          defaultActiveKey={tabs[0]}
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          {categorias.data.map((item: any, i: number) => {
            return (
              <Tab
                eventKey={item.attributes.Nome}
                title={item.attributes.Nome}
                key={i}
              >
                {/* <div className="contentLinks">
                  {item.attributes.item_abas.map(
                    (itemCategoria: any, indexCategoria: number) => {
                      return (
                        <ItemButton
                          key={indexCategoria}
                          iconName="heartbeat"
                          title={itemCategoria.attributes.Titulo}
                          link={itemCategoria.attributes.url_completa}
                        />
                      )
                    },
                  )}
                </div> */}
              </Tab>
            )
          })}
        </Tabs>
      </div>
    </>
  )
}
