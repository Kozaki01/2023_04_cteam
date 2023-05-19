import * as React from "react";

export default function MyComponent(props: any) {
  return (
    <>
      <div className="div">
        <picture>
          <source
            srcSet="https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Fd957b11abdab4e238d3e759e5ea83a3a?format=webp&width=100 100w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Fd957b11abdab4e238d3e759e5ea83a3a?format=webp&width=200 200w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Fd957b11abdab4e238d3e759e5ea83a3a?format=webp&width=400 400w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Fd957b11abdab4e238d3e759e5ea83a3a?format=webp&width=800 800w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Fd957b11abdab4e238d3e759e5ea83a3a?format=webp&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Fd957b11abdab4e238d3e759e5ea83a3a?format=webp&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Fd957b11abdab4e238d3e759e5ea83a3a?format=webp&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Fd957b11abdab4e238d3e759e5ea83a3a"
            type="image/webp"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Fd957b11abdab4e238d3e759e5ea83a3a"
            srcSet="https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Fd957b11abdab4e238d3e759e5ea83a3a?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Fd957b11abdab4e238d3e759e5ea83a3a?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Fd957b11abdab4e238d3e759e5ea83a3a?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Fd957b11abdab4e238d3e759e5ea83a3a?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Fd957b11abdab4e238d3e759e5ea83a3a?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Fd957b11abdab4e238d3e759e5ea83a3a?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Fd957b11abdab4e238d3e759e5ea83a3a?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Fd957b11abdab4e238d3e759e5ea83a3a"
            className="image"
          />
        </picture>
        <div className="builder-image-sizer image-sizer" />
      </div>
      <style jsx>{`
        .div {
          display: flex;
          position: relative;
          min-width: 20px;
          min-height: 20px;
          max-width: 400px;
        }
        .image {
          object-fit: contain;
          object-position: center;
          position: absolute;
          height: 100%;
          width: 100%;
          top: 0;
          left: 0;
        }
        .image-sizer {
          width: 100%;
          padding-top: 113.75%;
          pointer-events: none;
          font-size: 0;
        }
      `}</style>
    </>
  );
}