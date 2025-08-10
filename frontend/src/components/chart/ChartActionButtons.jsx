import { useState } from "react";
import { BurgerMenu } from "../Utils.jsx/BurgerMenu";

export const ChartActionButtons = ({ chartRef, characters, currentRoot }) => {
  let compact = 0;

  const [hideMenu, setHideMenu] = useState(false);
  function setIsChecked(e) {
    setHideMenu(e);
  }

  function acceptExpend(chartRef) {
    const expandAll = confirm(
      `
    You are about to expand ${characters.length} characters!
    Are you sure you want to do it?
    `
    );
    if (expandAll) {
      chartRef.current?.expandAll().render();
    }
    return;
  }
  return (
    <div className="actions-buttons-container">
      <div className="action-buttons">
        <BurgerMenu setIsChecked={setIsChecked} />

        {hideMenu && (
          <>
            <button
              onClick={() => chartRef.current?.fit().zoom(1)}
              className="btn"
            >
              Fit
            </button>
            <button className="btn" onClick={() => acceptExpend(chartRef)}>
              Expand all
            </button>
            <button
              className="btn"
              onClick={() => chartRef.current?.collapseAll().render()}
            >
              Collapse all
            </button>
            <button
              onClick={() => chartRef.current?.compact(compact++ % 2).render()}
              className="btn"
            >
              <i className="fas fa-sitemap"></i> Compact
            </button>
            <button
              onClick={(d) =>
                chartRef.current
                  ?.clearHighlighting()
                  ?.setUpToTheRootHighlighted(currentRoot)
                  .render()
              }
              className="btn"
            >
              <i className="fas fa-route"></i> Mark root
            </button>
            <button
              onClick={() => chartRef.current.clearHighlighting()}
              className="btn btn-action-button waves-effect waves-light"
            >
              <i className="fas fa-eraser"></i> Clear mark
            </button>
          </>
        )}
      </div>
    </div>
  );
};
