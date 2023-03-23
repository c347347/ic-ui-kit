import {
  Component,
  Element,
  Host,
  Prop,
  h,
  Listen,
  State,
  Watch,
} from "@stencil/core";
import paginationFirst from "../../assets/pagination-first.svg";
import paginationPrevious from "../../assets/pagination-previous.svg";
import paginationNext from "../../assets/pagination-next.svg";
import paginationLast from "../../assets/pagination-last.svg";
import { IcThemeForeground } from "../../interface";
import { IcPaginationTypes } from "./ic-pagination.types";

@Component({
  tag: "ic-pagination",
  styleUrl: "ic-pagination.css",
  shadow: true,
})
export class Pagination {
  @Element() el: HTMLIcPaginationElement;

  /**
   * The type of Pagination to be used.
   */
  @Prop() type: IcPaginationTypes = "simple";
  /**
   * The default page to display.
   */
  @Prop() defaultPage: number = 1;
  /**
   * The number of pages displayed adjacent to the current page.
   */
  @Prop() adjacentCount: number = 1;
  /**
   * The number of pages displayed as boundary items to the current page.
   */
  @Prop() boundaryCount: number = 1;
  /**
   * If `true` the `firstPageButton` will not be displayed.
   */
  @Prop() hideFirstPageButton: boolean = false;
  /**
   * If `true` the `lastPageButton` will not be displayed.
   */
  @Prop() hideLastPageButton: boolean = false;
  /**
   * If `true` the current page in the `simple` appearance will not be displayed.
   */
  @Prop() hideCurrentPage: boolean = false;
  /**
   * If `true` the Pagination component will not allow interaction.
   */
  @Prop() loading: boolean = false;
  /**
   * The total number of pages.
   */
  @Prop() pages!: number;
  /**
   * The appearance of the pagination, e.g. dark or light. Default appearance if value not set
   */
  @Prop() appearance: IcThemeForeground = "default";

  @State() currentPage: number = this.defaultPage;
  @State() startEllipsis: boolean = false;
  @State() endEllipsis: boolean = false;
  @State() startItems: number[] = [];
  @State() endItems: number[] = [];
  @State() midItems: number[] = [];

  @Listen("paginationItemClick")
  paginationItemClickHandler(ev: CustomEvent) {
    const page = ev.detail.page;
    this.currentPage = page;
    //emit icPageChange here?
  }

  @Watch("currentPage")
  watchPageChangeHandler(): void {
    if (this.type === "simple") {
      return;
    }

    const startItems = [];
    let startItemCount = 0;
    const endItems = [];
    let endStart = this.pages;
    const midItems = [];
    let midStart;
    let midEnd;
    let startEllipsis = false;
    let endEllipsis = false;

    if (this.pages <= this.boundaryCount * 2 + this.adjacentCount * 2 + 3) {
      this.startEllipsis = false;
      this.endEllipsis = false;
      for (let i = 1; i <= this.pages; i++) {
        startItems.push(i);
      }
      this.startItems = startItems;
      return;
    }

    startItemCount = this.boundaryCount === 0 ? 1 : this.boundaryCount;
    endStart =
      this.boundaryCount === 0
        ? this.pages
        : this.pages - this.boundaryCount + 1;

    if (this.currentPage <= this.adjacentCount + this.boundaryCount + 2) {
      startEllipsis = false;
      endEllipsis = true;

      let numItems = 2 * this.adjacentCount + 1;
      if (this.boundaryCount === 0) {
        numItems--;
      }
      midStart = startItemCount + 1;
      midEnd = midStart + numItems;
    } else {
      startEllipsis = true;
      if (
        this.currentPage >
        this.pages - (this.adjacentCount + this.boundaryCount + 2)
      ) {
        let numItems = 2 * this.adjacentCount + 1;
        if (this.boundaryCount === 0) {
          numItems--;
        }
        midEnd =
          this.boundaryCount === 0
            ? this.pages - 1
            : this.pages - this.boundaryCount;
        midStart = midEnd - numItems;
      } else {
        endEllipsis = true;
        midStart = this.currentPage - this.adjacentCount;
        midEnd = this.currentPage + this.adjacentCount;
      }
    }

    //create array of start items
    if (
      this.boundaryCount > 0 ||
      (this.boundaryCount === 0 && startEllipsis === false)
    ) {
      for (let i = 1; i <= startItemCount; i++) {
        startItems.push(i);
      }
    }

    //create array of end items
    if (
      this.boundaryCount > 0 ||
      (this.boundaryCount === 0 && endEllipsis === false)
    ) {
      for (let i = endStart; i <= this.pages; i++) {
        endItems.push(i);
      }
    }

    //create array of mid items
    for (let i = midStart; i <= midEnd; i++) {
      midItems.push(i);
    }

    this.startEllipsis = startEllipsis;
    this.endEllipsis = endEllipsis;
    this.startItems = startItems;
    this.endItems = endItems;
    this.midItems = midItems;
  }

  private handleClickFirst = () => {
    this.currentPage = 1;
  };
  private handleClickPrevious = (): void => {
    this.currentPage--;
  };
  private handleClickNext = (): void => {
    this.currentPage++;
  };
  private handleClickLast = (): void => {
    this.currentPage = this.pages;
  };

  // button rendering abstracted from component render methos for clarity
  private firstButton = () => {
    return (
      <ic-button
        id="first-page-button"
        aria-label="Go to first page"
        size="small"
        disableTooltip={true}
        appearance={this.appearance}
        onClick={this.handleClickFirst}
        class="page-button first-last"
        disabled={this.currentPage === 1}
        variant="icon"
        innerHTML={paginationFirst}
      />
    );
  };
  private previousButton = () => {
    return (
      <ic-button
        id="previous-page-button"
        aria-label="Go to previous page"
        size="small"
        disableTooltip={true}
        appearance={this.appearance}
        onClick={this.handleClickPrevious}
        class="page-button next-previous"
        disabled={this.currentPage === 1}
        variant="icon"
        innerHTML={paginationPrevious}
      />
    );
  };
  private nextButton = () => {
    return (
      <ic-button
        id="next-page-button"
        aria-label="Go to next page"
        size="small"
        disableTooltip={true}
        appearance={this.appearance}
        onClick={this.handleClickNext}
        class="page-button next-previous"
        disabled={this.currentPage === this.pages}
        variant="icon"
        innerHTML={paginationNext}
      />
    );
  };
  private lastButton = () => {
    return (
      <ic-button
        id="last-page-button"
        aria-label="Go to last page"
        size="small"
        disableTooltip={true}
        appearance={this.appearance}
        onClick={this.handleClickLast}
        class="page-button first-last"
        disabled={this.currentPage === this.pages}
        variant="icon"
        innerHTML={paginationLast}
      />
    );
  };

  private renderStartEllipsis = () => {
    return (
      <ic-pagination-item
        appearance={this.appearance}
        type="ellipsis"
        id="start-ellipsis"
      />
    );
  };

  private renderEndEllipsis = () => {
    return (
      <ic-pagination-item
        appearance={this.appearance}
        type="ellipsis"
        id="end-ellipsis"
      />
    );
  };

  private renderStartItems = () => {
    return this.startItems.map((page: number) => {
      return (
        <ic-pagination-item
          appearance={this.appearance}
          selected={page === this.currentPage}
          type="page"
          page={page}
        />
      );
    });
  };

  private renderEndItems = () => {
    return this.endItems.map((page: number) => {
      return (
        <ic-pagination-item
          appearance={this.appearance}
          selected={page === this.currentPage}
          type="page"
          page={page}
        />
      );
    });
  };

  private renderMiddleItems = () => {
    return this.midItems.map((page: number) => {
      return (
        <ic-pagination-item
          appearance={this.appearance}
          selected={page === this.currentPage}
          type="page"
          page={page}
        />
      );
    });
  };

  componentWillLoad(): void {
    this.watchPageChangeHandler();
  }

  render() {
    const {
      type,
      pages,
      currentPage,
      hideCurrentPage,
      loading,
      hideFirstPageButton,
      hideLastPageButton,
    } = this;

    return (
      <Host>
        {type === "simple" && (
          <nav
            class={{
              ["loading"]: loading,
            }}
          >
            {hideFirstPageButton ? null : this.firstButton()}
            {this.previousButton()}
            {hideCurrentPage ? null : (
              <ic-pagination-item
                pages={pages}
                appearance={this.appearance}
                type="simple-current"
                page={currentPage}
              />
            )}
            {this.nextButton()}
            {hideLastPageButton ? null : this.lastButton()}
          </nav>
        )}
        {type === "complex" && (
          <nav
            class={{
              ["loading"]: loading,
            }}
          >
            {this.hideFirstPageButton ? null : this.firstButton()}
            {this.previousButton()}
            {this.renderStartItems()}
            {this.startEllipsis && this.renderStartEllipsis()}
            {this.renderMiddleItems()}
            {this.endEllipsis && this.renderEndEllipsis()}
            {this.renderEndItems()}
            {this.nextButton()}
            {this.hideLastPageButton ? null : this.lastButton()}
          </nav>
        )}
      </Host>
    );
  }
}
