/**
 * Footer - Simple footer component
 */
export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-brand">LOGA</div>
                <div className="footer-tagline">Design · Develop · Deploy · Maintain</div>
                <div className="copyright">© 2019-{currentYear} Loga. All Rights Reserved.</div>
            </div>
        </footer>
    );
}
